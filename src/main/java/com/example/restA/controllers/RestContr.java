package com.example.restA.controllers;

import com.example.restA.model.Role;
import com.example.restA.model.User;
import com.example.restA.service.RoleService;
import com.example.restA.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;
import java.util.*;

@RestController
@CrossOrigin
public class RestContr {
    private final UserService userService;
    private final RoleService roleService;

    public RestContr(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @CrossOrigin
    @GetMapping("admin/list")
    public List<User> list() {
        List<User> users = new ArrayList<>();
        for (User u : userService.findAll()) {
            User user1 = new User();
            user1.setName(u.getName());
            user1.setAddress(u.getAddress());
            user1.setEmail(u.getEmail());
            user1.setId(u.getId());
            users.add(user1);
        }
        return users;
    }

    @PostMapping("admin/add")
    public void add(@RequestBody User user) {
        Set<Role> roles = new HashSet<>();
        roles.add(roleService.getRoleByName("ROLE_USER"));
        user.setRoles(roles);
        userService.addUser(user);
    }

    @DeleteMapping("admin/delete/{id}")
    public void delete(@PathVariable Long id) {
        userService.deleteById(id);
    }

//    @CrossOrigin
//    @PutMapping ("admin/edit")
//    public ResponseEntity<User> updateUser(@RequestBody User user) {
//        try {
//            Set<Role> roles = new HashSet<>();
//            roles.add(roleService.getRoleByName("ROLE_USER"));
//            user.setRoles(roles);
//            return new ResponseEntity<>(
//                    userService.saveUser(user), HttpStatus.OK);
//        } catch (Exception e) {
//            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//        }
//    }

@CrossOrigin
    @PutMapping("admin/edit")
    public void update(@RequestBody User user) {
        Set<Role> roles = new HashSet<>();
        roles.add(roleService.getRoleByName("ROLE_USER"));
        user.setRoles(roles);
        userService.update(user);
    }

    @GetMapping("/user")
    public User getUser(Principal principal) {
        System.out.println(principal.getName());
        User user = userService.findByUsername(principal.getName());
        User user1 = new User();
        user1.setName(user.getName());
        user1.setId(user.getId());
        user1.setEmail(user.getEmail());
        user1.setAddress(user.getAddress());
        return user1;
    }
}
