package com.example.restA.service;

import com.example.restA.model.Role;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public interface RoleService {
    List<Role> getAllRoles();
    List<String> getNamesOfRolesToList();
    Role getRoleByName(String name);
}
