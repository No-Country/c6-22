package com.nocountry.ecommerce.rest.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class ProductResponse {

  private Long id;
  private String name;
  private Float price;
  private String details;
  private String brand;
  private String img;

}
