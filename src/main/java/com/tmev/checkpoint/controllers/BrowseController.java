package com.tmev.checkpoint.controllers;

import com.api.igdb.exceptions.RequestException;
import com.api.igdb.request.TwitchAuthenticator;
import com.api.igdb.utils.TwitchToken;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@RestController
@RequestMapping("/REST/browse")
public class BrowseController {

    public static final String CLIENT_ID = System.getenv("CLIENT_ID");
    public static final String CLIENT_SECRET = System.getenv("CLIENT_SECRET");

    // Create a new TwitchToken object
    public static TwitchAuthenticator tAuth = TwitchAuthenticator.INSTANCE;
    public static TwitchToken requestToken = tAuth.requestTwitchToken(CLIENT_ID, CLIENT_SECRET);

    // The instance stores the token in the object until a new one is requested
    public static TwitchToken getToken = tAuth.getTwitchToken();

    // handles requests at /REST/browse?platform=
    @GetMapping
    @ResponseBody
    public JSONObject displayPlatformData(@RequestParam String platform) throws RequestException, IOException, InterruptedException, JSONException {

        // API call
        HttpClient client = HttpClient.newHttpClient();

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.igdb.com/v4/multiquery"))
                .header("Client-ID", CLIENT_ID)
                .header("Authorization", getToken.getAccess_token())
                .header("Accept", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(
                        "query games \"Playstation 4\" { " +
                                "fields name, genres.name, platforms.name, summary, involved_companies.company.name, " +
                                "cover.image_id, screenshots.url, total_rating, release_dates.date, videos.video_id; " +
                                "sort total_rating desc; " +
                                "where platforms = " + platform + " & total_rating >= 90 & themes != (42) & category = 0; " +
                                "limit 10;" +
                                "};"))
                .build();

        HttpResponse<String> response = client.send(request,
                HttpResponse.BodyHandlers.ofString());

        System.out.println(response);

        // removing array brackets
        String formattedResponse = response.body().substring(1, response.body().length() - 1);

        // parsing general response
        JSONObject jsonSimpleGame = new JSONObject(formattedResponse);

        return jsonSimpleGame;
    }

}
