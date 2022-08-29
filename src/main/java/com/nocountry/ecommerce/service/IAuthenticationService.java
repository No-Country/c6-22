package com.nocountry.ecommerce.service;

import com.nocountry.ecommerce.rest.dto.request.LoginRequest;
import com.nocountry.ecommerce.rest.dto.response.LoginResponse;

public interface IAuthenticationService {

  LoginResponse login(LoginRequest loginReq);

}
