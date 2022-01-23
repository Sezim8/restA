package com.example.restA.repo;

import com.example.restA.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT s from User s where s.email=?1")
    Optional<User> findUserByEmail(String email);

    @Query(value = "SELECT u FROM User u WHERE u.name = :name")
    User findByUsername(String name);

}



