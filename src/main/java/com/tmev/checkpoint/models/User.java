package com.tmev.checkpoint.models;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @NotBlank(message = "Name is required")
    @Size(min = 3, max = 20, message = "Username must be between 3 and 20 characters")
    private String username;

    @NotNull
    @NotBlank(message = "Password is required")
    @Size(min = 6, max = 120, message = "Password must be at least 6 characters")
    @Column(name = "password")
    private String passwordHash;

    public static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @ElementCollection
    @Column(name = "games")
    private List<Integer> gamesList = new ArrayList<>();

    public User() {}

    public User(String username, String password) {
        this.username = username;
        this.passwordHash = encoder.encode(password);
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return passwordHash;
    }

    public void setPassword(String password) {
        this.passwordHash = encoder.encode(password);
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