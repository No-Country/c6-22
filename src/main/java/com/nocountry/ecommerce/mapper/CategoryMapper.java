package com.nocountry.ecommerce.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.nocountry.ecommerce.persistence.model.Category;
import com.nocountry.ecommerce.rest.dto.response.CategoryResponse;
import com.nocountry.ecommerce.rest.dto.response.ListCategoryResponse;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
    
    public CategoryResponse toCategoryResponse(Category category);

    public ListCategoryResponse toListCategoryResponse(List<Category> categories);
}
