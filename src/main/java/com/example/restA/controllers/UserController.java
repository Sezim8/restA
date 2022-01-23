package com.example.restA.controllers;

import com.example.restA.model.User;
import com.example.restA.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {
    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    public String get() {
        return "main-page";
    }

    @GetMapping("/login")
    public String getLoginPage() {
        return "login";
    }
    @GetMapping("/user-page")
    public String getUser() {
        return "user";
    }
}