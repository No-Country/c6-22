package com.nocountry.ecommerce.rest.dto.response;

import java.util.List;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class ListCategoryResponse {
    
   private  List<CategoryResponse> categories;

}
