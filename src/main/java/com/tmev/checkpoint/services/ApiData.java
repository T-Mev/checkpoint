package com.tmev.checkpoint.services;

import com.tmev.checkpoint.models.dto.SimpleGameDTO;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public abstract class ApiData {

    public static final String IGDB_KEY = System.getenv("IGDB");

//    private CompleteGameDTO getComplexGame (int id) throws IOException, InterruptedException, JSONException {
//
//        HttpClient client = HttpClient.newHttpClient();
//
//        HttpRequest request = HttpRequest.newBuilder()
//                .uri(URI.create("https://api-v3.igdb.com/games"))
//                .header("user-key", IGDB_KEY)
//                .header("Accept", "application/json")
//                .POST(HttpRequest.BodyPublishers.ofString("fields name, cover, platform; where id = " + id))
//                .build();
//
//        HttpResponse<String> response = client.send(request,
//                HttpResponse.BodyHandlers.ofString());
//
//        JSONObject jsonGame = new JSONObject(response.body());
//
//        String name = (String) jsonGame.get("name");
//        int cover = (int) jsonGame.get("cover");
//
//
//
//        String coverUrl = this.getCoverURL(jsonGame.get("cover");
////        this.getPlatformName();
//
//    }

    public static SimpleGameDTO getSimpleGame (int id) throws IOException, InterruptedException, JSONException {

        // API call
        HttpClient client = HttpClient.newHttpClient();

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api-v3.igdb.com/games"))
                .header("user-key", IGDB_KEY)
                .header("Accept", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString("fields name, cover.image_id; where id = " + id + ";"))
                .build();

        HttpResponse<String> response = client.send(request,
                HttpResponse.BodyHandlers.ofString());

        // removing array brackets
        String formattedResponse = response.body().substring(1, response.body().length() - 1);

        // parsing general response
        JSONObject jsonSimpleGame = new JSONObject(formattedResponse);

        // parsing "cover" object
        JSONObject jsonCover = jsonSimpleGame.getJSONObject("cover");

        // getting cover url
        String coverUrl = (String) jsonCover.get("image_id");

        return new SimpleGameDTO((int) jsonSimpleGame.get("id"), coverUrl);

    }

    private static String getCoverURL (int id) throws IOException, InterruptedException, JSONException {

        // API call
        HttpClient client = HttpClient.newHttpClient();

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api-v3.igdb.com/covers"))
                .header("user-key", IGDB_KEY)
                .header("Accept", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString("fields image_id; where id = " + id + ";"))
                .build();

        HttpResponse<String> response = client.send(request,
                HttpResponse.BodyHandlers.ofString());

        // removing array brackets
        String formattedResponse = response.body().substring(1, response.body().length() - 1);

        //parse response
        JSONObject jsonCover = new JSONObject(formattedResponse);

        return (String) jsonCover.get("image_id");
    }

}
