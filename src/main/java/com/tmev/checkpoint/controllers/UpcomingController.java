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
@RequestMapping("/REST/upcoming")
public class UpcomingController {

    @Autowired
    private ApiService apiService;

    // Get current time in unix
    private final long currentUnixTime = System.currentTimeMillis() / 1000;

    // Get one month's time in unix
    private final long monthAfterUnixTime = currentUnixTime + 1603929600;

    // Handles requests at /REST/upcoming
    @GetMapping
    public String displayUpcomingGameData() throws RequestException {

        // Authenticating requests for the IGDB API
        IGDBWrapper wrapper = IGDBWrapper.INSTANCE;
        wrapper.setCredentials(apiService.getClientId(), apiService.getAccessToken());

        try{
            return JsonRequestKt.jsonGames(IGDBWrapper.INSTANCE, new APICalypse()
                    .fields("name, cover.image_id, release_dates.platform.name, release_dates.human, release_dates.region")
                    .where("first_release_date > " + currentUnixTime + " & first_release_date < " + monthAfterUnixTime +
                            " & category = (0, 1, 2, 3, 4) & cover.image_id != null & version_parent = null & themes != 42")
                    .sort("first_release_date", Sort.ASCENDING)
                    .limit(50));
        } catch(RequestException e) {
            System.out.println(e.getStatusCode());
            throw e;
        }

    }
}