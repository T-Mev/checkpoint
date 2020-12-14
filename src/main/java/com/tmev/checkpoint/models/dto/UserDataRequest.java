package com.tmev.checkpoint.models.dto;

import java.util.List;

public class UserDTO {

    private String username;
    private List<SimpleGameDTO> simpleGames;

    public UserDTO(String username, List<SimpleGameDTO> simpleGames) {
        this.username = username;
        this.simpleGames = simpleGames;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<SimpleGameDTO> getSimpleGames() {
        return simpleGames;
    }

    public void setSimpleGames(List<SimpleGameDTO> simpleGames) {
        this.simpleGames = simpleGames;
    }
}


