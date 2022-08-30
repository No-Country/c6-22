package com.nocountry.ecommerce.rest.controller;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.nocountry.ecommerce.rest.dto.request.LoginRequest;
import com.nocountry.ecommerce.rest.dto.response.LoginResponse;
import com.nocountry.ecommerce.service.IAuthenticationService;

@RestController
public class AuthController {

  @Autowired
  IAuthenticationService authenticationService;

  @PostMapping(value = "/login",
      produces = {"application/json"},
      consumes = {"application/json"})
  public ResponseEntity<LoginResponse> login(@RequestBody @Valid LoginRequest loginReq) {
    LoginResponse response = authenticationService.login(loginReq);
    return ResponseEntity.ok(response);
  }

}
