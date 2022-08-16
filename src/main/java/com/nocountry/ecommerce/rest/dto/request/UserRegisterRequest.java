package com.nocountry.ecommerce.rest.dto.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserRegisterRequest {
  
  @Email(message = "Must be a valid email")
  @NotNull
  private String email;
  
  @Size(min = 6, max = 8, message = "Password should be 6 to 8 characters long")
  @NotBlank(message = "Password must not be empty")
  private String password;

}
