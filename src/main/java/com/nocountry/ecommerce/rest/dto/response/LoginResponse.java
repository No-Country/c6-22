package com.nocountry.ecommerce.rest.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class LoginResponse {
  
  private String email;
  private String token;

}
