package com.nocountry.ecommerce.mapper;

import org.mapstruct.Mapper;
import com.nocountry.ecommerce.persistence.model.Product;
import com.nocountry.ecommerce.rest.dto.response.ProductResponse;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ProductMapper {

  @Mapping(target = "details", source = "description")
  @Mapping(target = "id", source = "productId")
  @Mapping(target = "img", source = "image")
  ProductResponse toResponse(Product productEntity);

}
