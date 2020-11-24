package com.tmev.checkpoint.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;

    @ElementCollection
    private List<Integer> gamesList = new ArrayList<>();

    public User() {}

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public long getId() {
        return id;
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

    public List<Integer> getGamesList() { return gamesList; }

    public void setGamesList(List<Integer> gamesList) {
        this.gamesList = gamesList;
    }

    public void addToGamesList(Integer game) { this.gamesList.add(game); }

    public void removeFromGamesList(Integer game) { this.gamesList.remove(game); }

    public Boolean containsGame(Integer game) { return this.gamesList.contains(game); }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

