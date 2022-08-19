package com.nocountry.ecommerce.rest.controller;

import org.springframework.web.bind.annotation.RestController;
import com.nocountry.ecommerce.rest.dto.response.CategoryResponse;
import com.nocountry.ecommerce.service.impl.CategoryService;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class CategoryController {

	@Autowired
	CategoryService categoryService;

	@GetMapping("/categories")
	public List<CategoryResponse> findAll() {
		return categoryService.findAll();
	}

}
