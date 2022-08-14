package com.nocountry.ecommerce.config.auth.common;

public enum Role {
  
  ADMIN, CLIENT;

  private static final String ROLE_PREFIX = "ROLE_";

  public String getFullRoleName() {
    return ROLE_PREFIX + this.name();
  }

}
