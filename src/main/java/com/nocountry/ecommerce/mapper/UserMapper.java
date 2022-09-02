package com.nocountry.ecommerce.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.nocountry.ecommerce.persistence.model.User;
import com.nocountry.ecommerce.rest.dto.request.LoginRequest;
import com.nocountry.ecommerce.rest.dto.request.UserRegisterRequest;
import com.nocountry.ecommerce.rest.dto.response.LoginResponse;
import com.nocountry.ecommerce.rest.dto.response.UserRegisterResponse;

@Mapper(componentModel = "spring")
public abstract class UserMapper {
  
  @Autowired
  private PasswordEncoder passwordEncoder;
  
  @Mapping(target = "role", ignore = true)
  @Mapping(target = "softDelete", ignore = true)
  @Mapping(target = "userId", ignore = true)
  @Mapping(target = "username", source = "email")
  @Mapping(target = "password", source = "password", qualifiedByName = "encodePass")
  public abstract User toEntity(UserRegisterRequest UserRegisterReq);
  
  @Named("encodePass")
  protected String encodePassword(String password) {
    return passwordEncoder.encode(password);
  }

  @Mapping(target = "token", ignore = true)
  @Mapping(target = "id", source = "userId")
  public abstract UserRegisterResponse toUserRegisterResponse(User userEntity);

  @Mapping(target = "role", ignore = true)
  @Mapping(target = "softDelete", ignore = true)
  @Mapping(target = "userId", ignore = true)
  @Mapping(target = "username", source = "email")
  @Mapping(target = "password", source = "password", qualifiedByName = "encodePass")
  public abstract User toEntity(LoginRequest loginReq);

  @Mapping(target = "email", source = "username")
  @Mapping(target = "token", ignore = true)
  public abstract LoginResponse toLoginResponse(User user);

}
