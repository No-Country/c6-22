package com.nocountry.ecommerce.rest.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class UserRegisterResponse {
  
  private Long id;
  private String username;
  private String token;

}
