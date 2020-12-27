package com.tmev.checkpoint.controllers;

import com.tmev.checkpoint.models.User;
import com.tmev.checkpoint.models.data.UserRepository;
import com.tmev.checkpoint.models.dto.JwtResponse;
import com.tmev.checkpoint.models.dto.UserDataRequest;
import com.tmev.checkpoint.security.JwtUtils;
import com.tmev.checkpoint.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/REST/auth")
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody UserDataRequest userDataRequest) {

        if (!userRepository.existsByUsername(userDataRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body("\"User doesn't exist!\"");
        }

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userDataRequest.getUsername(), userDataRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername()));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody UserDataRequest userDataRequest) {

        if (userRepository.existsByUsername(userDataRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body("\"Username is already taken!\"");
        }

        User user = new User(userDataRequest.getUsername(), userDataRequest.getPassword());

        userRepository.save(user);

        return ResponseEntity.ok("\"User registered successfully!\"");
    }

}
