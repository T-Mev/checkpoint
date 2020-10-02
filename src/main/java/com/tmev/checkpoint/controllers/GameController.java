package com.tmev.checkpoint.controllers;

import com.api.igdb.apicalypse.APICalypse;
import com.api.igdb.exceptions.RequestException;
import com.api.igdb.request.IGDBWrapper;
import com.api.igdb.request.JsonRequestKt;
import com.api.igdb.request.TwitchAuthenticator;
import com.api.igdb.utils.TwitchToken;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/REST/games/")
public class GameController {

    public static final String CLIENT_ID = System.getenv("CLIENT_ID");
    public static final String CLIENT_SECRET = System.getenv("CLIENT_SECRET");

    // Create a new TwitchToken object
    public static TwitchAuthenticator tAuth = TwitchAuthenticator.INSTANCE;
    public static TwitchToken requestToken = tAuth.requestTwitchToken(CLIENT_ID, CLIENT_SECRET);

    // The instance stores the token in the object until a new one is requested
     public static TwitchToken getToken = tAuth.getTwitchToken();


    // Handles requests at /REST/games/{id}
    @GetMapping("{id}")
    public String displaySpecificGameData(@PathVariable int id) throws RequestException {

        // Authenticating requests for the IGDB API
        IGDBWrapper wrapper = IGDBWrapper.INSTANCE;
        wrapper.setCredentials(CLIENT_ID, getToken.getAccess_token());

        try{
            return JsonRequestKt.jsonGames(IGDBWrapper.INSTANCE, new APICalypse()
                    .fields("name, genres.name, platforms.name, summary, similar_games, involved_companies.company.name, " +
                            "involved_companies.developer, involved_companies.publisher, cover.image_id, " +
                            "screenshots.image_id, total_rating, release_dates.human, release_dates.region, videos.video_id")
                    .where("id = " + id));
        } catch(RequestException e) {
            System.out.println(e.getStatusCode());
            throw e;
        }

    }

}