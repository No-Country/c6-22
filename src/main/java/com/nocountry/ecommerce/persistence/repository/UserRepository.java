package com.nocountry.ecommerce.persistence.repository;

import org.springframework.stereotype.Repository;

import com.nocountry.ecommerce.persistence.model.User;

import org.springframework.data.jpa.repository.JpaRepository;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
