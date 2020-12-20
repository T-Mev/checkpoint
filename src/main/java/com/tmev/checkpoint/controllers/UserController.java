package com.tmev.checkpoint.controllers;

import com.api.igdb.apicalypse.APICalypse;
import com.api.igdb.exceptions.RequestException;
import com.api.igdb.request.IGDBWrapper;
import com.api.igdb.request.JsonRequestKt;

import com.tmev.checkpoint.models.User;
import com.tmev.checkpoint.models.data.UserRepository;
import com.tmev.checkpoint.services.ApiService;

import com.tmev.checkpoint.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/REST/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ApiService apiService;

    // Handles GET requests at /REST/user?name=
    // Displays the user's collection
    @GetMapping
    public String displayUserCollection (@RequestParam String name) throws RequestException {

        // Authenticating requests for the IGDB API
        IGDBWrapper wrapper = IGDBWrapper.INSTANCE;
        wrapper.setCredentials(apiService.getClientId(), apiService.getAccessToken());

        // Setting User and getting games list
        Optional<User> user = userRepository.findByUsername(name);

        if (user.isPresent()) {
            String gamesList = user.get().getGamesList().stream().map(String::valueOf).collect(Collectors.joining(","));

            // IGDB API Call
            try{
                return JsonRequestKt.jsonGames(IGDBWrapper.INSTANCE, new APICalypse()
                        .fields("name, cover.image_id")
                        .where("id = (" + gamesList + ")"));
            } catch(RequestException e) {
                System.out.println(e.getStatusCode());
                throw e;
            }

        } else {
            // throw custom error handling when user is not found
            return "User not found";
        }

    }
//
    // Handles POST requests at /REST/user/{username}
    // Adds game to the User's collection
    @PostMapping("{username}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<String> addToCollection (@PathVariable String username, @RequestBody Integer gameId) {

        // Setting the User
        String usersName = ((UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        User user = userRepository.findByUsername(usersName).orElseThrow();

        // Checking if game is in collection
        if (user.containsGame(gameId)) {
            return ResponseEntity
                    .badRequest()
                    .body("This game is already in the collection!");
        }

        // Add game to collection
        user.addToGamesList(gameId);
        userRepository.save(user);

        return ResponseEntity.ok("Game added successfully!");
    }


    // Handles DELETE requests at /REST/user/{username}
    // Removes game from the User's collection
    @DeleteMapping("{username}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<String> removeFromCollection (@PathVariable String username, @RequestBody Integer gameId) {

        // Setting the User
        String usersName = ((UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        User user = userRepository.findByUsername(usersName).orElseThrow();

        // Checking if game is in collection
        if (!user.containsGame(gameId)) {
            return ResponseEntity
                    .badRequest()
                    .body("This game is not in the collection!");
        }

        // Remove game from collection
        user.removeFromGamesList(gameId);
        userRepository.save(user);

        return ResponseEntity.ok("Game added successfully!");
    }

//    // Handles POST requests at /REST/user?username=&gameId=
//    @PostMapping
//    @PreAuthorize("isAuthenticated()")
//    public ResponseEntity<?> addToCollection (@RequestParam String username, @RequestParam Integer gameId) {
//
//        // Setting User and adding game to collection
//        String usersName = ((UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
//        User user = userRepository.findByUsername(usersName).orElseThrow();
//
//        // Checking if game is in collection
//        if (user.containsGame(gameId)) {
//            return ResponseEntity
//                    .badRequest()
//                    .body("This game is already in the collection!");
//        }
//
//        // Add game to collection
//        user.addToGamesList(gameId);
//        userRepository.save(user);
//
//        return ResponseEntity.ok("Game added successfully!");
//    }


//
//    // Handles GET requests at /REST/user?id=&gameId=
//    @GetMapping
//    public Boolean includedInCollection(@RequestParam Long id, @RequestParam Integer gameId) {
//
//        // Setting User and checking if game is in collection
//        User user = userRepository.getById(id);
//        return user.containsGame(gameId);
//    }

}
