package com.tmev.checkpoint.services;

import com.api.igdb.apicalypse.APICalypse;
import com.api.igdb.apicalypse.Sort;
import com.api.igdb.exceptions.RequestException;
import com.api.igdb.request.IGDBWrapper;
import com.api.igdb.request.JsonRequestKt;
import com.api.igdb.request.ProtoRequestKt;
import com.api.igdb.request.TwitchAuthenticator;
import com.api.igdb.utils.TwitchToken;
import org.springframework.stereotype.Service;
import proto.Game;

import java.util.List;

//@Service
public abstract class ApiData {

    public static final String CLIENT_ID = System.getenv("CLIENT_ID");
    public static final String CLIENT_SECRET = System.getenv("CLIENT_SECRET");

    // Create a new TwitchToken object
    public static TwitchAuthenticator tAuth = TwitchAuthenticator.INSTANCE;
    public static TwitchToken requestToken = tAuth.requestTwitchToken(CLIENT_ID, CLIENT_SECRET);

    // The instance stores the token in the object until a new one is requested
    public static TwitchToken getToken = tAuth.getTwitchToken();


    public static String getSimpleGame (int id) throws RequestException {

        // Authenticating requests for the IGDB API
        IGDBWrapper wrapper = IGDBWrapper.INSTANCE;
        wrapper.setCredentials(CLIENT_ID, getToken.getAccess_token());

//        APICalypse apicalypse = new APICalypse().fields("*").sort("release_dates.date", Sort.DESCENDING);
//        try{
//            List<Game> games = ProtoRequestKt.games(wrapper, apicalypse);
//            return games.toString();
//        } catch(RequestException e) {
//            // Do something or error
//        } return "null";

        return JsonRequestKt.jsonGames(IGDBWrapper.INSTANCE, new APICalypse().fields("cover.image_id").sort("release_dates.date", Sort.DESCENDING));

    }

}