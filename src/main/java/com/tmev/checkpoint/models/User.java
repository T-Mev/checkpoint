package com.tmev.checkpoint.models;

//import javax.persistence.Entity;
import java.util.List;

//@Entity
public class User {

    private int id;
    private String username;
    private String password;
    private List<Integer> gamesList;

    public User(int id, String username, String password, List<Integer> gamesList) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.gamesList = gamesList;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Integer> getGamesList() {
        return gamesList;
    }

    public void setGamesList(List<Integer> gamesList) {
        this.gamesList = gamesList;
    }
}

