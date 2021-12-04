package com.example.restA.service;

import com.example.restA.model.User;
import com.example.restA.repo.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class UserServiceImplim implements UserService {
    private final UserRepository userRepository;

    public UserServiceImplim(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void addUser(User user) {
        Optional<User> optionalUser = userRepository.findUserByEmail(user.getEmail());
        if (optionalUser.isPresent()) {
            throw new IllegalStateException("EMAIL TAKEN, PLEASE INTER ANOTHER!");
        }
        userRepository.save(user);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public void deleteById(long id) {
        userRepository.deleteById(id);

    }

    @Override
    public User findById(long id) {
        return null;
    }

    @Override
    public User getUserByUserName(String s) {
        return null;
    }

    @Override
    public void update(User user) {
        Optional<User> row = userRepository.findById(user.getId());
        if (row.isPresent()) {
            User item = row.get();
            if (!user.getName().isEmpty()) {
                item.setName(user.getName());

            }
            if (user.getAddress() != null) {
                item.setAddress(user.getAddress());
            }
            if (user.getEmail() != null) {
                item.setEmail(user.getEmail());
            }

            userRepository.save(item);
        }
    }
}


