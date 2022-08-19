package com.nocountry.ecommerce.mapper;

import java.util.List;

import com.nocountry.ecommerce.persistence.model.Category;
import com.nocountry.ecommerce.rest.dto.response.CategoryResponse;

public interface ICategoryMapper {
    
    public List<CategoryResponse> toActiveCategoryResponse(List<Category> categories);
}
