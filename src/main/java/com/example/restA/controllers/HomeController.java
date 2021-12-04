package com.example.restA.controllers;

import com.example.restA.model.User;
import com.example.restA.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class HomeController {
    private final UserService userService;

    public HomeController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin
    @GetMapping("/list")
    public List<User> list()
    {
        return userService.findAll();
    }

    @PostMapping("/add")
    public void add(@RequestBody User user){
        userService.addUser(user);
    }

    @DeleteMapping("/delete/{id}")
    public void delete (@PathVariable Long id){
        userService.deleteById(id);
    }

    @PutMapping("/edit")
    public void update(@RequestBody User user){
        System.out.println("edit work");
        userService.update(user);

    }


}


