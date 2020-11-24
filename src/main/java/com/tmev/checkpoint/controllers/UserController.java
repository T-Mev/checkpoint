package com.tmev.checkpoint.controllers;

import com.api.igdb.apicalypse.APICalypse;
import com.api.igdb.exceptions.RequestException;
import com.api.igdb.request.IGDBWrapper;
import com.api.igdb.request.JsonRequestKt;

import com.tmev.checkpoint.models.User;
import com.tmev.checkpoint.models.data.UserRepository;
import com.tmev.checkpoint.services.ApiService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.stream.Collectors;

@RestController
@RequestMapping("/REST/user/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ApiService apiService;

    // Handles requests at /REST/user/
    @GetMapping("{userId}")
    public String displayUserCollection (@PathVariable int userId) throws RequestException {

        // Setting User and getting games list
        User user = userRepository.getById(userId);
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
}

// create @PostMapping to handle edits to User's game collection
