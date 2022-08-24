package com.nocountry.ecommerce.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nocountry.ecommerce.mapper.CategoryMapper;
import com.nocountry.ecommerce.persistence.repository.CategoryRepository;
import com.nocountry.ecommerce.rest.dto.response.ListCategoryResponse;
import com.nocountry.ecommerce.service.ICategoryService;

@Service
public class CategoryService implements ICategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    CategoryMapper categoryMapper;

    @Override
    public ListCategoryResponse findAll() {
      ListCategoryResponse response = ListCategoryResponse.builder().build();
      response.setCategories(
          categoryMapper.toListCategoryResponse(categoryRepository.findBySoftDeleteFalse()));
      return response;
    }
}
