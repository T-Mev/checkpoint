package com.tmev.checkpoint.controllers;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/error")
public class ErrorsController implements ErrorController {

    @GetMapping
    public String redirectToIndex() {
        return "index.html";
    }

    @Override
    public String getErrorPath() {
        return null;
    }
}
