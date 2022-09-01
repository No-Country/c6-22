package com.nocountry.ecommerce.mapper;

import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import com.nocountry.ecommerce.persistence.model.Product;
import com.nocountry.ecommerce.rest.dto.response.ProductResponse;

@Mapper(componentModel = "spring")
public interface ProductMapper {

  @Mapping(target = "details", source = "description")
  @Mapping(target = "id", source = "productId")
  @Mapping(target = "img", source = "image")
  ProductResponse toResponse(Product productEntity);

  List<ProductResponse> toListResponse(List<Product> productsList);

}
