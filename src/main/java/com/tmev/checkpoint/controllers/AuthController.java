package com.tmev.checkpoint.controllers;

import com.google.gson.Gson;

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

import javax.validation.ConstraintViolationException;
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

    private static final Gson gson = new Gson();

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody UserDataRequest userDataRequest) {

        if (!userRepository.existsByUsername(userDataRequest.getUsername().toLowerCase())) {
            return ResponseEntity
                    .badRequest()
                    .body(gson.toJson("User doesn't exist!"));
        }

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userDataRequest.getUsername().toLowerCase(), userDataRequest.getPassword().toLowerCase()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername()));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody UserDataRequest userDataRequest) {

        try {
            if (userRepository.existsByUsername(userDataRequest.getUsername())) {
                return ResponseEntity
                        .badRequest()
                        .body(gson.toJson("Username is already taken!"));
            }

            User user = new User(userDataRequest.getUsername().toLowerCase(), userDataRequest.getPassword().toLowerCase());
            userRepository.save(user);
            return ResponseEntity.ok(gson.toJson("User registered successfully!"));

        } catch (ConstraintViolationException e) {

            return ResponseEntity
                    .badRequest()
                    .body(gson.toJson("Only letters (a-z), numbers (0-9), periods (.) and underscores (_) allowed. " +
                            "Cannot start or end with a period (.) or underscore (_)."));
        }

    }

}