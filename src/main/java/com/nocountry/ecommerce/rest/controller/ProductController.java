package com.nocountry.ecommerce.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.nocountry.ecommerce.rest.dto.response.ListProductResponse;
import com.nocountry.ecommerce.rest.dto.response.ProductResponse;
import com.nocountry.ecommerce.service.IProductService;

@RestController
public class ProductController {
  
  @Autowired
  IProductService productService;

  @CrossOrigin
  @GetMapping(value = "/catalog/{id}",
      produces = {"application/json"})
  public ResponseEntity<ProductResponse> getBy(@PathVariable Long id) {
    ProductResponse product = productService.getBy(id);
    return ResponseEntity.ok(product);    
  }
  
  @CrossOrigin
  @GetMapping(value = "/categories/{category}",
      produces = {"application/json"})
  public ResponseEntity<ListProductResponse> getAllBy(@PathVariable("category") String category) {
    ListProductResponse products = productService.findAllBy(category);
    return ResponseEntity.ok(products);
  }

}
