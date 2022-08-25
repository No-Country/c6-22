package com.nocountry.ecommerce.exception;

public class NotFoundException extends RuntimeException {

  private static final long serialVersionUID = -3909699168058965155L;

  public NotFoundException(String message) {
    super(message);
  }

}
