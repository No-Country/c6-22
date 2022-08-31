package com.nocountry.ecommerce.rest.controller;

import org.springframework.web.bind.annotation.RestController;
import com.nocountry.ecommerce.rest.dto.response.ListCategoryResponse;
import com.nocountry.ecommerce.service.ICategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class CategoryController {

	@Autowired
	ICategoryService categoryService;

	@CrossOrigin
	@GetMapping("/categories")
	public ResponseEntity<ListCategoryResponse> findAll() {
		return ResponseEntity.ok(categoryService.findAll());
	}

}
