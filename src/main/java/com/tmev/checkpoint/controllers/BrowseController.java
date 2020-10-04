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
    ApiService apiService;

    private String platformName;
    private String gameData;

    // Handles requests at /REST/browse?platform=
    @GetMapping
    public String displayPlatformData(@RequestParam int platform) throws RequestException {

        // Authenticating requests for the IGDB API
        IGDBWrapper wrapper = IGDBWrapper.INSTANCE;
        wrapper.setCredentials(apiService.getClientId(), apiService.getAccessToken());

        try{
            return JsonRequestKt.jsonGames(IGDBWrapper.INSTANCE, new APICalypse()
                    .fields("name, summary, cover.image_id, aggregated_rating, platforms.name")
                    .where("platforms = " + platform + "& hypes >= 1 & aggregated_rating != null & themes != 42 & category = 0")
                    .sort("aggregated_rating", Sort.DESCENDING)
                    .sort("hypes", Sort.DESCENDING)
                    .limit(20));

        } catch(RequestException e) {
            System.out.println(e.getStatusCode());
            throw e;
        }

//        try{
//            String gameData = JsonRequestKt.jsonGames(IGDBWrapper.INSTANCE, new APICalypse()
//                    .fields("name, summary, cover.image_id, aggregated_rating")
//                    .where("platforms = " + platform + "& hypes >= 1 & aggregated_rating != null & themes != 42 & category = 0")
//                    .sort("aggregated_rating", Sort.DESCENDING)
//                    .sort("hypes", Sort.DESCENDING)
//                    .limit(20));
//
//            switch (platform) {
//                case 48:
//                    platformName = "Playstation 4";
//                    break;
//                case 49:
//                    platformName = "Xbox One";
//                    break;
//                case 130:
//                    platformName = "Nintendo Switch";
//                    break;
//                case 6:
//                    platformName = "PC";
//                    break;
//                default:
//                    System.out.println("");
//            }
//
//            return new SimpleGameDTO(gameData, platformName);
//
//        } catch(RequestException e) {
//            System.out.println(e.getStatusCode());
//            throw e;
//        }

    }

}

