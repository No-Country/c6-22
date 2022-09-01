package com.nocountry.ecommerce.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nocountry.ecommerce.exception.NotFoundException;
import com.nocountry.ecommerce.mapper.ProductMapper;
import com.nocountry.ecommerce.persistence.model.Category;
import com.nocountry.ecommerce.persistence.model.Product;
import com.nocountry.ecommerce.persistence.repository.CategoryRepository;
import com.nocountry.ecommerce.persistence.repository.ProductRepository;
import com.nocountry.ecommerce.rest.dto.response.ListProductResponse;
import com.nocountry.ecommerce.rest.dto.response.ListProductResponse.ListProductResponseBuilder;
import com.nocountry.ecommerce.rest.dto.response.ProductResponse;
import com.nocountry.ecommerce.service.IProductService;

@Service
public class ProductService implements IProductService {

  @Autowired
  ProductRepository productRepository;

  @Autowired
  ProductMapper productMapper;
  
  @Autowired
  CategoryRepository categoryRepository;

  @Override
  public ProductResponse getBy(Long id) {
    Product productEntity = productRepository.findByProductIdAndSoftDeleteFalse(id);
    if (productEntity == null) {
      throw new NotFoundException("Product not found.");
    }
    return productMapper.toResponse(productEntity);
  }

  @Override
  public ListProductResponse findAllBy(String categoryName) {
    Category category = categoryRepository.findByNameIgnoreCase(categoryName);
    if (category == null) {
      throw new NotFoundException("Category not found.");
    }
    ListProductResponseBuilder resp = ListProductResponse.builder();
    List<Product> productsList = productRepository.
        findByCategoryIdAndSoftDeleteFalse(category.getCategoryId());
    resp.products(productMapper.toListResponse(productsList));
    return resp.build();
  }

}
