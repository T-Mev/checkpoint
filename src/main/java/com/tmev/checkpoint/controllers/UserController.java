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

import java.util.stream.Collectors;

@RestController
@RequestMapping("/REST/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ApiService apiService;

    // Handles GET requests at /REST/user?id=
    @GetMapping
    public String displayUserCollection (@RequestParam Long id) throws RequestException {

        // Setting User and getting games list
        User user = userRepository.getById(id);
        String gamesList = user.getGamesList().stream().map(String::valueOf).collect(Collectors.joining(","));

        // Authenticating requests for the IGDB API
        IGDBWrapper wrapper = IGDBWrapper.INSTANCE;
        wrapper.setCredentials(apiService.getClientId(), apiService.getAccessToken());

        try{
            return JsonRequestKt.jsonGames(IGDBWrapper.INSTANCE, new APICalypse()
                    .fields("name, cover.image_id")
                    .where("id = (" + gamesList + ")"));
        } catch(RequestException e) {
            System.out.println(e.getStatusCode());
            throw e;
        }
    }

    // Handles POST requests at /REST/user?id=&gameId=
    @PostMapping
    public void addToCollection (@RequestParam Long id, @RequestParam Integer gameId) {

        // Setting User and adding game to collection
        User user = userRepository.getById(id);
        user.addToGamesList(gameId);
        userRepository.save(user);
    }

    // Handles DELETE requests at /REST/user?id=&gameId=
    @DeleteMapping
    public void removeFromCollection (@RequestParam Long id, @RequestParam Integer gameId) {
        User user = userRepository.getById(id);
        user.removeFromGamesList(gameId);
        userRepository.save(user);
    }

    // Handles GET requests at /REST/user?id=&gameId=
    @GetMapping
    public Boolean includedInCollection(@RequestParam Long id, @RequestParam Integer gameId) {
        User user = userRepository.getById(id);
        return user.containsGame(gameId);
    }

}

