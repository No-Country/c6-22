package com.nocountry.ecommerce.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nocountry.ecommerce.persistence.model.Customer;

@Repository
public interface OrderRepository extends JpaRepository<Customer, Long> {

}
