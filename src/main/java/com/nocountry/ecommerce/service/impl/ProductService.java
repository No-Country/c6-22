package com.nocountry.ecommerce.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nocountry.ecommerce.mapper.ProductMapper;
import com.nocountry.ecommerce.persistence.model.Product;
import com.nocountry.ecommerce.persistence.repository.ProductRepository;
import com.nocountry.ecommerce.rest.dto.response.ProductResponse;
import com.nocountry.ecommerce.service.IProductService;

@Service
public class ProductService implements IProductService {

  @Autowired
  ProductRepository productRepository;

  @Autowired
  ProductMapper productMapper;

  @Override
  public ProductResponse getBy(Long id) {
    Product productEntity = productRepository.findByProductIdAndSoftDeleteFalse(id);
    return productMapper.toResponse(productEntity);
  }

}
