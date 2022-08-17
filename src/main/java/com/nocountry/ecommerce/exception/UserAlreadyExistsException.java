package com.nocountry.ecommerce.exception;

public class UserAlreadyExistsException extends RuntimeException {

  private static final long serialVersionUID = -1003702236454095003L;
  
  public UserAlreadyExistsException(String message) {
    super(message);
  }

}
