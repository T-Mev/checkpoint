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
    ApiService apiService;

    // Get current time in unix
    private long currentUnixTime = System.currentTimeMillis() / 1000L;

    // Get one month's time in unix
    private long monthAfterUnixTime = currentUnixTime + 1603929600;

    // Handles requests at /REST/upcoming
    @GetMapping
    public String displayUpcomingGameData() throws RequestException {

        // Authenticating requests for the IGDB API
        IGDBWrapper wrapper = IGDBWrapper.INSTANCE;
        wrapper.setCredentials(apiService.getClientId(), apiService.getAccessToken());

        try{
            return JsonRequestKt.jsonGames(IGDBWrapper.INSTANCE, new APICalypse()
                    .fields("name, cover.image_id, release_dates.human")
                    .where("first_release_date > " + currentUnixTime + " & first_release_date < " + monthAfterUnixTime +
                            "& hypes >= 1 & category = 0 & themes != 42")
                    .sort("first_release_date", Sort.ASCENDING)
                    .limit(20));
        } catch(RequestException e) {
            System.out.println(e.getStatusCode());
            throw e;
        }

    }
}