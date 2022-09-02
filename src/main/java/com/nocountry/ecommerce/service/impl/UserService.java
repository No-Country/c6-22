package com.nocountry.ecommerce.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nocountry.ecommerce.config.auth.common.JwtUtils;
import com.nocountry.ecommerce.config.auth.common.Role;
import com.nocountry.ecommerce.exception.UserAlreadyExistsException;
import com.nocountry.ecommerce.mapper.UserMapper;
import com.nocountry.ecommerce.persistence.model.User;
import com.nocountry.ecommerce.persistence.repository.RoleRepository;
import com.nocountry.ecommerce.persistence.repository.UserRepository;
import com.nocountry.ecommerce.rest.dto.request.UserRegisterRequest;
import com.nocountry.ecommerce.rest.dto.response.UserRegisterResponse;
import com.nocountry.ecommerce.service.IUserService;

@Service
public class UserService implements IUserService {
  
  @Autowired
  private UserRepository userRepository;
  
  @Autowired
  private RoleRepository roleRepository;
  
  @Autowired
  private UserMapper userMapper;
  
  @Autowired
  private JwtUtils jwtUtils;

  @Override
  public UserRegisterResponse create(UserRegisterRequest userRegisterReq) {
    if (userRepository.findByUsername(userRegisterReq.getEmail()) != null) {
      throw new UserAlreadyExistsException(
          "Email address: " + userRegisterReq.getEmail() + " is already being used.");
    }
    User userEntity = userMapper.toEntity(userRegisterReq);
    userEntity.setSoftDelete(false);
    userEntity.setRole(roleRepository.findByName(Role.CLIENT.getFullRoleName()));
    UserRegisterResponse userResponse = userMapper.toUserRegisterResponse(
        userRepository.save(userEntity));
    userResponse.setToken(jwtUtils.generateToken(userEntity));
    return userResponse;
  }

}
