package com.tmev.checkpoint.controllers;

import com.tmev.checkpoint.models.dto.SimpleGameDTO;
import com.tmev.checkpoint.services.ApiData;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController()
@RequestMapping("/REST/games/")
public class GameController {

    @Autowired
    ApiData apiData;

//    Use complexGame object here
//    @GetMapping("{id}")
//    public SimpleGameDTO testAPI(@PathVariable int id) throws InterruptedException, JSONException, IOException {
//        return ApiData.getComplexGame();
//    }

//    For testing only
    @GetMapping("{id}")

    public SimpleGameDTO testAPI(@PathVariable int id) throws InterruptedException, JSONException, IOException {
    return apiData.getSimpleGame(id);
    }

}
