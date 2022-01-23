package com.example.restA.repo;

import com.example.restA.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository  extends JpaRepository<Role, Long> {

    @Query(value = "SELECT r FROM Role r WHERE r.role = ?1")
    Role getRoleByName(String role);
}






