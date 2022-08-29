package com.nocountry.ecommerce.config.auth.filter;

import java.io.IOException;
import java.util.List;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import com.nocountry.ecommerce.config.auth.common.JwtUtils;
import com.nocountry.ecommerce.config.auth.common.ResponseUtils;
import io.jsonwebtoken.JwtException;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {
  
  private static final String CREDENTIALS = "";
  
  @Autowired
  private JwtUtils jwtUtils;

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
      FilterChain filterChain) throws ServletException, IOException {
    
    String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

    if (jwtUtils.isValidToken(authorizationHeader)) {
      try {
        setAuthentication(authorizationHeader);
        filterChain.doFilter(request, response);
      } catch (JwtException e) {
        ResponseUtils.setCustomForbiddenResponse(response);
      }
    } else {
        SecurityContextHolder.clearContext();
        filterChain.doFilter(request, response);
    } 
  }

  private void setAuthentication(String authorizationHeader) {
    List<GrantedAuthority> authorities = jwtUtils.getAuthorities(authorizationHeader);
    
    if (authorities == null || authorities.isEmpty()) {
      throw new IllegalArgumentException("User must have one authority.");
    }
    
    UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
        jwtUtils.getUsernameFromToken(authorizationHeader),
        CREDENTIALS,
        authorities);
    
    SecurityContextHolder.getContext().setAuthentication(authentication);
  }

}
