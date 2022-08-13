package com.nocountry.ecommerce.persistence.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;

import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Id;
import javax.persistence.GenerationType;
import javax.persistence.Column;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "categories")
public class Category {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryId;
    
    @Column(name = "name", nullable = false, unique = true)
    private String name;

    @Column(name = "description", nullable = true)
    private String description;

    @Column(name = "image", nullable = false)
    private String image;

    @Column(name = "soft_delete", nullable = false, columnDefinition = "boolean default false")
    private boolean softDelete;
}
