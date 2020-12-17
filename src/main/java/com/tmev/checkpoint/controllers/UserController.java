package com.tmev.checkpoint.controllers;

import com.api.igdb.apicalypse.APICalypse;
import com.api.igdb.exceptions.RequestException;
import com.api.igdb.request.IGDBWrapper;
import com.api.igdb.request.JsonRequestKt;

import com.tmev.checkpoint.models.User;
import com.tmev.checkpoint.models.data.UserRepository;
import com.tmev.checkpoint.services.ApiService;

import org.springframework.beans.factory.annotation.Autowired;
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
//            throw custom error handling when user is not found
            return "User not found";
        }

    }
//
//    // Handles POST requests at /REST/user?id=&gameId=
//    @PostMapping
//    public void addToCollection (@RequestParam Long id, @RequestParam Integer gameId) {
//
//        // Use JWT / JavaScript web token to check which user is logged
//        // Unwrap JWT to get user id
//
//        // Setting User and adding game to collection
//        Optional<User> user = userRepository.findById(id);
//        user.get().addToGamesList(gameId);
//        userRepository.save(user.get());
//    }
//
//    // Handles DELETE requests at /REST/user?id=&gameId=
//    @DeleteMapping
//    public void removeFromCollection (@RequestParam Long id, @RequestParam Integer gameId) {
//
//        // Setting User and removing game from collection
//        User user = userRepository.getById(id);
//        user.removeFromGamesList(gameId);
//        userRepository.save(user);
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
