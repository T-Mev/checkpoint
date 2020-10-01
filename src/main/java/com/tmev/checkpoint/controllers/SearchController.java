package com.tmev.checkpoint.controllers;

import com.api.igdb.apicalypse.APICalypse;
import com.api.igdb.exceptions.RequestException;
import com.api.igdb.request.IGDBWrapper;
import com.api.igdb.request.JsonRequestKt;
import com.api.igdb.request.TwitchAuthenticator;
import com.api.igdb.utils.TwitchToken;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/REST/search")
public class SearchController {

    public static final String CLIENT_ID = System.getenv("CLIENT_ID");
    public static final String CLIENT_SECRET = System.getenv("CLIENT_SECRET");

    // Create a new TwitchToken object
    public static TwitchAuthenticator tAuth = TwitchAuthenticator.INSTANCE;
    public static TwitchToken requestToken = tAuth.requestTwitchToken(CLIENT_ID, CLIENT_SECRET);

    // The instance stores the token in the object until a new one is requested
    public static TwitchToken getToken = tAuth.getTwitchToken();


    // Handles requests at /REST/search?term=
    @GetMapping
    public String displaySearchData(@RequestParam String term) throws RequestException {

        // Authenticating requests for the IGDB API
        IGDBWrapper wrapper = IGDBWrapper.INSTANCE;
        wrapper.setCredentials(CLIENT_ID, getToken.getAccess_token());

        try{
            return JsonRequestKt.jsonGames(IGDBWrapper.INSTANCE, new APICalypse()
                    .search(term)
                    .fields("name, summary, cover.image_id, platforms.name, aggregated_rating")
                    .where("themes != 42 & category = 0 & version_parent = null")
                    .limit(50));
        } catch(RequestException e) {
            System.out.println(e.getStatusCode());
            throw e;
        }

    }

}
