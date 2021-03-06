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
    private ApiService apiService;

    // Handles requests at /REST/games?id=
    @GetMapping
    public String displaySpecificGameData(@RequestParam int id) throws RequestException {

        // Authenticating requests for the IGDB API
        IGDBWrapper wrapper = IGDBWrapper.INSTANCE;
        wrapper.setCredentials(apiService.getClientId(), apiService.getAccessToken());

        // IGDB API Call
        try{
            return JsonRequestKt.jsonGames(IGDBWrapper.INSTANCE, new APICalypse()
                    .fields("name, genres.name, platforms.name, summary, cover.image_id, " +
                            "screenshots.image_id, artworks.image_id, total_rating, total_rating_count, release_dates.human, release_dates.region, " +
                            "release_dates.platform, release_dates.platform.name, videos.video_id")
                    .where("id = " + id));
        } catch(RequestException e) {
            System.out.println(e.getStatusCode());
            throw e;
        }

    }

}