package com.nocountry.ecommerce.exception;

public class InvalidCredentialsException extends RuntimeException {

  private static final long serialVersionUID = 4462296839839683443L;
  
  public InvalidCredentialsException(String message) {
    super(message);
  }

}
