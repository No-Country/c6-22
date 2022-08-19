package com.nocountry.ecommerce.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nocountry.ecommerce.exception.CategoryNotFoundExeption;
import com.nocountry.ecommerce.mapper.impl.CategoryMapper;
import com.nocountry.ecommerce.persistence.repository.CategoryRepository;
import com.nocountry.ecommerce.rest.dto.response.CategoryResponse;
import com.nocountry.ecommerce.service.ICategoryService;

@Service
public class CategoryService implements ICategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    CategoryMapper categoryMapper;

    @Override
    public List<CategoryResponse> findAll() {
        return categoryMapper.toActiveCategoryResponse(categoryRepository.findAll());
    }
}
