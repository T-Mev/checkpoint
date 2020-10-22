package com.tmev.checkpoint.controllers;

import com.api.igdb.apicalypse.APICalypse;
import com.api.igdb.exceptions.RequestException;
import com.api.igdb.request.IGDBWrapper;
import com.api.igdb.request.JsonRequestKt;

import com.tmev.checkpoint.services.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/REST/games")
public class GameController {

    @Autowired
    ApiService apiService;

    // Handles requests at /REST/games?id=
    @GetMapping
    public String displaySpecificGameData(@RequestParam int id) throws RequestException {

        // Authenticating requests for the IGDB API
        IGDBWrapper wrapper = IGDBWrapper.INSTANCE;
        wrapper.setCredentials(apiService.getClientId(), apiService.getAccessToken());

        try{
            return JsonRequestKt.jsonGames(IGDBWrapper.INSTANCE, new APICalypse()
                    .fields("name, genres.name, platforms.name, summary, involved_companies.company.name, " +
                            "involved_companies.developer, involved_companies.publisher, cover.image_id, " +
                            "screenshots.image_id, total_rating, release_dates.human, release_dates.region, videos.video_id")
                    .where("id = " + id));
        } catch(RequestException e) {
            System.out.println(e.getStatusCode());
            throw e;
        }

    }

}