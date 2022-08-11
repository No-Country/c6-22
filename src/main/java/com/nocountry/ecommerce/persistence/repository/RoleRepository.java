package com.nocountry.ecommerce.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nocountry.ecommerce.persistence.model.Role;

@Repository
public interface RoleRepository  extends JpaRepository<Role, Long> {

    
}
