package com.nocountry.ecommerce.service;

import java.util.List;

import com.nocountry.ecommerce.rest.dto.response.CategoryResponse;

public interface ICategoryService {
    
    List<CategoryResponse> findAll();
}
