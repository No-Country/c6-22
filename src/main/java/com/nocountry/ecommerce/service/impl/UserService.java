package com.nocountry.ecommerce.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nocountry.ecommerce.mapper.UserMapper;
import com.nocountry.ecommerce.persistence.model.User;
import com.nocountry.ecommerce.persistence.repository.UserRepository;
import com.nocountry.ecommerce.rest.dto.request.UserRegisterRequest;
import com.nocountry.ecommerce.rest.dto.response.UserRegisterResponse;
import com.nocountry.ecommerce.service.IUserService;

@Service
public class UserService implements IUserService {
  
  @Autowired
  UserRepository userRepository;
  
  @Autowired
  UserMapper userMapper;

  @Override
  public UserRegisterResponse create(UserRegisterRequest userRegisterReq) {
    User userEntity = userMapper.toEntity(userRegisterReq);
    userEntity.setSoftDelete(false);
    return userMapper.toUserRegisterResponse(userRepository.save(userEntity));
  }

}
