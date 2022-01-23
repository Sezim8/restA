package com.example.restA.service;

import com.example.restA.model.User;

import java.util.List;

public interface UserService {
    void addUser(User user);
    List<User> findAll();
    void deleteById(long id);
    User findById(long id);
    User getUserByUserName(String name);
    void update(User user);
    User findByUsername(String name);
     User saveUser(User user);
}
