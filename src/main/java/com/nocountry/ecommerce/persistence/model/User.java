package com.nocountry.ecommerce.persistence.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(name = "username" , nullable = false, unique = true)
    private String username;

    @Column(name = "password" , nullable = false)
    private String password;

    @Column(name = "soft_delete" , nullable = false, columnDefinition = "boolean default false")
    private Boolean softDelete;

    @OneToMany
    @JoinColumn(name = "role_id")
    private Role role;
}
