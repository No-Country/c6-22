package com.nocountry.ecommerce.rest.dto.response;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Builder
@Data
@Getter
@Setter
public class CategoryResponse {

	private Long id;
	private String name;
	private String description;
	private String image;

}
