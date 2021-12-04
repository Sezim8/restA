package com.example.restA.service;

import com.example.restA.model.User;

import java.util.List;

public interface UserService {
    void addUser(User user);
    List<User> findAll();
    void deleteById(long id);
    User findById(long id);
    User getUserByUserName(String s);
    void update(User user);
}
