//package com.tmev.checkpoint.controllers;
//
//import com.tmev.checkpoint.models.User;
//import com.tmev.checkpoint.models.data.UserRepository;
//import com.tmev.checkpoint.models.dto.SimpleGameDTO;
//import com.tmev.checkpoint.models.dto.UserDTO;
//import com.tmev.checkpoint.services.ApiData;
//import org.json.JSONException;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.io.IOException;
//import java.util.ArrayList;
//import java.util.List;
//
//@RestController
//@RequestMapping("/REST/user/")
//public class UserController {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @GetMapping("{id}")
//    public UserDTO user (@PathVariable int id) throws InterruptedException, JSONException, IOException {
//
//        User user = userRepository.findById(id).orElseThrow();
//        List<SimpleGameDTO> simpleGames = new ArrayList<>();
//
//        for (int gameId : user.getGamesList()) {
//        simpleGames.add(ApiData.getSimpleGame(gameId));
//        }
//        return new UserDTO(user.getUsername(), simpleGames);
//    }
//}

// grab user
// get their list of game Ids
// morph that into a comma separated string
// pass that into the API call
// send API data and User data to front end with the use of UserCollectionDTO

// create @PostMapping to handle edits to User's game collection
