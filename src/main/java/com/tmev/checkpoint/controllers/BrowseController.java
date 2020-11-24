package com.tmev.checkpoint.controllers;

import com.api.igdb.apicalypse.APICalypse;
import com.api.igdb.apicalypse.Sort;
import com.api.igdb.exceptions.RequestException;
import com.api.igdb.request.IGDBWrapper;
import com.api.igdb.request.JsonRequestKt;

import com.tmev.checkpoint.services.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/REST/browse")
public class BrowseController {

    @Autowired
    private ApiService apiService;

    // Handles requests at /REST/browse?platform=
    @GetMapping
    public String displayPlatformData(@RequestParam int platform) throws RequestException {

        // Authenticating requests for the IGDB API
        IGDBWrapper wrapper = IGDBWrapper.INSTANCE;
        wrapper.setCredentials(apiService.getClientId(), apiService.getAccessToken());

        // IGDB API Call
        try{
            return JsonRequestKt.jsonGames(IGDBWrapper.INSTANCE, new APICalypse()
                    .fields("name, summary, cover.image_id, platforms.name")
                    .where("platforms = " + platform + " & follows != null & themes != 42 &" +
                            " hypes >= 1 & category = (0, 3, 4) & id != (120268, 10039, 37419, 18387)")
                    .sort("follows", Sort.DESCENDING)
                    .limit(20));
        } catch(RequestException e) {
            System.out.println(e.getStatusCode());
            throw e;
        }

    }

}