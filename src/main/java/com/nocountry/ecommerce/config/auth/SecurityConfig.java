package com.nocountry.ecommerce.config.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import com.nocountry.ecommerce.config.auth.filter.CustomAccessDeniedHandler;
import com.nocountry.ecommerce.config.auth.filter.CustomAuthenticationEntryPoint;
import com.nocountry.ecommerce.config.auth.filter.JwtRequestFilter;

@EnableWebSecurity
@Configuration
public class SecurityConfig {

  @Autowired
  private JwtRequestFilter jwtRequestFilter;

  @Bean
  public AccessDeniedHandler accessDeniedHandler() {
    return new CustomAccessDeniedHandler();
  }

  @Bean
  public AuthenticationEntryPoint authenticationEntryPoint() {
    return new CustomAuthenticationEntryPoint();
  }

  @Bean
  AuthenticationManager authenticationManager(
      AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
  }

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.csrf()
    .disable()
    .cors()
    .and()
    .sessionManagement()
    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
    .and()
    .authorizeRequests()
    .antMatchers(HttpMethod.POST, "/register")
    .permitAll()
    .antMatchers(HttpMethod.POST, "/login")
    .permitAll()
    .antMatchers(HttpMethod.GET, "/catalog/{id:[\\d+]}")
    .permitAll()
    .antMatchers(HttpMethod.GET, "/categories")
    .permitAll()
    .anyRequest()
    .authenticated()
    .and()
    .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class)
    .exceptionHandling()
    .accessDeniedHandler(accessDeniedHandler())
    .authenticationEntryPoint(authenticationEntryPoint());

    // For development environment only
    http.headers().frameOptions().disable();
    return http.build();
  }

  // For development enviroment only
  @Bean
  public WebSecurityCustomizer webSecurityCustomizer() {
    return (web) -> web.ignoring().antMatchers("/h2-console/**");
  }

}
