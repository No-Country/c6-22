package com.nocountry.ecommerce.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;
import com.nocountry.ecommerce.config.auth.common.JwtUtils;
import com.nocountry.ecommerce.exception.InvalidCredentialsException;
import com.nocountry.ecommerce.exception.NotFoundException;
import com.nocountry.ecommerce.mapper.UserMapper;
import com.nocountry.ecommerce.persistence.model.User;
import com.nocountry.ecommerce.persistence.repository.UserRepository;
import com.nocountry.ecommerce.rest.dto.request.LoginRequest;
import com.nocountry.ecommerce.rest.dto.response.LoginResponse;
import com.nocountry.ecommerce.service.IAuthenticationService;

@Service
public class AuthenticationService implements IAuthenticationService {
  
  @Autowired
  private UserMapper userMapper;
  
  @Autowired
  private AuthenticationManager authenticationManager;
  
  @Autowired
  private UserRepository userRepository;

  @Autowired
  private JwtUtils jwtUtils;

  @Override
  public LoginResponse login(LoginRequest user) {
    authenticate(user);
    User userEntity = getUserBy(user.getEmail());
    LoginResponse resp = userMapper.toLoginResponse(userEntity);
    resp.setToken(jwtUtils.generateToken(userEntity));
    return resp;
  }

  private User getUserBy(String username) {
    User userEntity = userRepository.findByUsername(username);
    if (userEntity == null) {
      throw new NotFoundException("User not found.");
    }
    return userEntity;
  }

  private void authenticate(LoginRequest user) {
    try {
      authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
          user.getEmail(), 
          user.getPassword()));
    } catch (Exception e) {
      throw new InvalidCredentialsException("Invalid email or password.");
    }
  }

}
