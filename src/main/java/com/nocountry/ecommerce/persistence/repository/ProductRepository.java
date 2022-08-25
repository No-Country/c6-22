package com.nocountry.ecommerce.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nocountry.ecommerce.persistence.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
  
  Product findByProductIdAndSoftDeleteFalse(Long productId);

}
