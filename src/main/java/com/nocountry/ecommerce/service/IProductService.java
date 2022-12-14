package com.nocountry.ecommerce.service;

import com.nocountry.ecommerce.rest.dto.response.ListProductResponse;
import com.nocountry.ecommerce.rest.dto.response.ProductResponse;

public interface IProductService {

  ProductResponse getBy(Long id);

  ListProductResponse findAllBy(String category);

}
