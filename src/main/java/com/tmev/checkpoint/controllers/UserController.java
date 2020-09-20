package com.tmev.checkpoint.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController("/REST/user/")
public class UserController {

    @GetMapping("{id}")
    public String user (@PathVariable int userId) {
        return null;
    }
}
