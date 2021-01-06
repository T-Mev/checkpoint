package com.tmev.checkpoint.controllers;

import com.api.igdb.apicalypse.APICalypse;
import com.api.igdb.apicalypse.Sort;
import com.api.igdb.exceptions.RequestException;
import com.api.igdb.request.IGDBWrapper;
import com.api.igdb.request.JsonRequestKt;

import com.google.gson.Gson;

import com.tmev.checkpoint.models.User;
import com.tmev.checkpoint.models.data.UserRepository;
import com.tmev.checkpoint.services.ApiService;
import com.tmev.checkpoint.services.UserDetailsImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/REST/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ApiService apiService;

    private static final Gson gson = new Gson();

    // Handles GET requests at /REST/user/{name}
    // Displays the user's collection
    @GetMapping("{name}")
    public String displayUserCollection (@PathVariable String name) throws RequestException {

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
                        .where("id = (" + gamesList + ")")
                        .sort("name", Sort.ASCENDING)
                        .limit(500));
            } catch(RequestException e) {
                System.out.println(e.getStatusCode());
                throw e;
            }

        } else {
            // should throw custom error handling when user is not found
            return "User not found";
        }

    }

    // Handles POST requests at /REST/user/{username}/game/{gameId}
    // Adds game to the User's collection
    @PostMapping("{username}/game/{gameId}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<String> addToCollection (@PathVariable String username, @RequestBody Integer gameId) {

        // Setting the User
        String usersName = ((UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        User user = userRepository.findByUsername(usersName).orElseThrow();

        // Checking if game is in collection
        if (user.containsGame(gameId)) {
            return ResponseEntity
                    .badRequest()
                    .body(gson.toJson("This game is already in the collection!"));
//                    .body("\"This game is already in the collection!\"");
        }

        // Add game to collection
        user.addToGamesList(gameId);
        userRepository.save(user);

        return ResponseEntity.ok(gson.toJson("Game added successfully!"));
//        return ResponseEntity.ok("\"Game added successfully!\"");
    }

    // Handles DELETE requests at /REST/user/{username}/game/{gameId}
    // Removes game from the User's collection
    @DeleteMapping("{username}/game/{gameId}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<String> removeFromCollection (@PathVariable String username, @PathVariable Integer gameId) {

        // Setting the User
        String usersName = ((UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        User user = userRepository.findByUsername(usersName).orElseThrow();

        // Checking if game is in collection
        if (!user.containsGame(gameId)) {
            return ResponseEntity
                    .badRequest()
                    .body(gson.toJson("This game doesn't exist in the collection!"));
//                    .body("\"This game doesn't exist in the collection!\"");
        }

        // Remove game from collection
        user.removeFromGamesList(gameId);
        userRepository.save(user);

        return ResponseEntity.ok(gson.toJson("Game removed successfully!"));
//        return ResponseEntity.ok("\"Game removed successfully!\"");
    }

    // Handles POST requests at /REST/user/{username}/games
    // Removes all games from the User's collection
    @PostMapping("{username}/games")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<String> removeAllFromCollection (@PathVariable String username, @RequestBody List<Integer> gameList) {

        // Setting the User
        String usersName = ((UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        User user = userRepository.findByUsername(usersName).orElseThrow();

        // Remove games from collection
        user.removeAllFromGamesList(gameList);
        userRepository.save(user);

        return ResponseEntity.ok(gson.toJson("Games removed successfully!"));
//        return ResponseEntity.ok("\"Games removed successfully!\"");
    }

    // Handles GET requests at /REST/user?id=&gameId=
    // Check if game is included in the User's collection
    @GetMapping("{username}/game/{gameId}")
    @PreAuthorize("isAuthenticated()")
    public Boolean includedInCollection(@PathVariable String username, @PathVariable Integer gameId) {

        // Setting the User
        String usersName = ((UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
        User user = userRepository.findByUsername(usersName).orElseThrow();

        // Checking if game is in collection
        return user.containsGame(gameId);
    }

}
