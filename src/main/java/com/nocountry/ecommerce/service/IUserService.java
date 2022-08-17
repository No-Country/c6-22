package com.nocountry.ecommerce.service;

import com.nocountry.ecommerce.rest.dto.request.UserRegisterRequest;
import com.nocountry.ecommerce.rest.dto.response.UserRegisterResponse;

public interface IUserService {

  UserRegisterResponse create(UserRegisterRequest userRegisterReq);

}
