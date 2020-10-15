package com.tmev.checkpoint.controllers;

import com.api.igdb.apicalypse.APICalypse;
import com.api.igdb.apicalypse.Sort;
import com.api.igdb.exceptions.RequestException;
import com.api.igdb.request.IGDBWrapper;
import com.api.igdb.request.JsonRequestKt;

import com.tmev.checkpoint.services.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/REST")
public class HomeController {

    @Autowired
    ApiService apiService;

    // Handles requests at root
    @GetMapping
    public String displayPopularGameData() throws RequestException {

        // Authenticating requests for the IGDB API
        IGDBWrapper wrapper = IGDBWrapper.INSTANCE;
        wrapper.setCredentials(apiService.getClientId(), apiService.getAccessToken());

        try{
            return JsonRequestKt.jsonGames(IGDBWrapper.INSTANCE, new APICalypse()
                    .fields("name, screenshots.image_id")
                    .where("hypes > 100 & platforms.id = 48 & category = 0 & themes != 42")
                    .sort("hypes", Sort.DESCENDING)
                    .limit(20));
        } catch(RequestException e) {
            System.out.println(e.getStatusCode());
            throw e;
        }

    }

}