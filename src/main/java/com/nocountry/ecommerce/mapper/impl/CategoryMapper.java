package com.nocountry.ecommerce.mapper.impl;

import java.util.ArrayList;
import java.util.List;

import org.mapstruct.Mapper;

import com.nocountry.ecommerce.mapper.ICategoryMapper;
import com.nocountry.ecommerce.persistence.model.Category;
import com.nocountry.ecommerce.rest.dto.response.CategoryResponse;

@Mapper(componentModel = "spring")
public class CategoryMapper implements ICategoryMapper {

	@Override
	public List<CategoryResponse> toActiveCategoryResponse(List<Category> categories) {
		List<CategoryResponse> categoryResponses = new ArrayList<>();
		for (Category category : categories) {
			if (!category.getSoftDelete()) {
				categoryResponses.add(CategoryResponse.builder().id(category.getCategoryId()).name(category.getName())
						.description(category.getDescription()).image(category.getImage()).build());
			}
		}
		return categoryResponses;
	}
}
