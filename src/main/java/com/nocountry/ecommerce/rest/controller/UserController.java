package com.nocountry.ecommerce.rest.controller;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.nocountry.ecommerce.rest.dto.request.UserRegisterRequest;
import com.nocountry.ecommerce.rest.dto.response.UserRegisterResponse;
import com.nocountry.ecommerce.service.IUserService;

@RestController
public class UserController {
  
  @Autowired
  IUserService userService;
  
  @PostMapping("/register")
  public ResponseEntity<UserRegisterResponse> create(
      @RequestBody @Valid UserRegisterRequest userRegisterReq) {
    UserRegisterResponse newUser = userService.create(userRegisterReq);
    return new ResponseEntity<>(newUser, HttpStatus.CREATED);
  }

}
