package com.nocountry.ecommerce.config.seeder;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.nocountry.ecommerce.config.auth.common.Role;
import com.nocountry.ecommerce.persistence.model.User;
import com.nocountry.ecommerce.persistence.repository.RoleRepository;
import com.nocountry.ecommerce.persistence.repository.UserRepository;
import lombok.extern.java.Log;

@Log
@Configuration
public class SeedUsers {
  
  private static final String ADMIN_EMAIL = "admin@test.com";
  private static final String PASSWORD = "abcd1234";
  
  @Autowired
  protected PasswordEncoder passwordEncoder;
  @Autowired
  protected UserRepository userRepository;
  @Autowired
  protected RoleRepository roleRepository;
  
  @Bean
  CommandLineRunner initUsersData() {
    return args -> {
      log.info("Loading initial Roles in Database...");
      createRoles();
      log.info("Loading Admin User in Database...");
      createAdminUser();
    };
  }

  private void createAdminUser() {
    if (userRepository.count() == 0) {
      userRepository.save(
          buildUser(ADMIN_EMAIL, Role.ADMIN));
      log.info("Admin User created.");
    }
    
  }

  private User buildUser(String email, Role role) {
    return User.builder()
        .username(email)
        .password(passwordEncoder.encode(PASSWORD))
        .role(roleRepository.findByName(role.getFullRoleName()))
        .softDelete(false)
        .build();
  }

  private void createRoles() {
    if (roleRepository.count() == 0) {
      roleRepository.saveAll(List.of(
          buildRole(Role.ADMIN),
          buildRole(Role.CLIENT)));
      log.info("Initial roles created.");
    }
  }

  private com.nocountry.ecommerce.persistence.model.Role buildRole(Role role) {
    return com.nocountry.ecommerce.persistence.model.Role.builder()
        .description(role.name())
        .name(role.getFullRoleName())
        .build();
  }
  
}
