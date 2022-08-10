package com.nocountry.ecommerce.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nocountry.ecommerce.persistence.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    
}
