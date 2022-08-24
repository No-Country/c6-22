package com.nocountry.ecommerce.mapper;

import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import com.nocountry.ecommerce.persistence.model.Category;
import com.nocountry.ecommerce.rest.dto.response.CategoryResponse;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
    
    @Mapping(target = "id", source = "categoryId")
    public CategoryResponse toCategoryResponse(Category category);

    public List<CategoryResponse> toListCategoryResponse(List<Category> categories);
}
