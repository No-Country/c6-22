package com.nocountry.ecommerce.service;

import com.nocountry.ecommerce.rest.dto.response.ListCategoryResponse;

public interface ICategoryService {
    
    ListCategoryResponse findAll();
}
