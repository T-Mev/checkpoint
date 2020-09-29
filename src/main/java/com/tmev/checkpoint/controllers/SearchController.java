package com.tmev.checkpoint.controllers;

import com.api.igdb.apicalypse.APICalypse;
import com.api.igdb.exceptions.RequestException;
import com.api.igdb.request.IGDBWrapper;
import com.api.igdb.request.ProtoRequestKt;
import com.api.igdb.request.TwitchAuthenticator;
import com.api.igdb.utils.TwitchToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import proto.Game;

import java.util.List;

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

    // handles requests at /REST/search?term=
    @GetMapping
    public String displayPlatformData(@RequestParam String term) throws RequestException {

        // Authenticating requests for the IGDB API
        IGDBWrapper wrapper = IGDBWrapper.INSTANCE;
        wrapper.setCredentials(CLIENT_ID, getToken.getAccess_token());

        APICalypse apicalypse = new APICalypse()
                .search(term)
                .fields("name, summary, cover.image_id, platforms.name")
                .where("themes != 42 & category = 0");
        try{
            List<Game> games = ProtoRequestKt.games(wrapper, apicalypse);
            return games.toString();
        } catch(RequestException e) {
            System.out.println(e.getStatusCode());
            throw e;
        }

    }

}