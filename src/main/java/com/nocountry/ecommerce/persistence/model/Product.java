package com.nocountry.ecommerce.persistence.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "products")
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long product_id;
    
    @Column(name = "name")
    private String name;
    
    @Column(name = "price")
    private Float price;

    @Column(name = "stock")
    private Integer stock;
    
    @Column(name = "brand")
    private String brand;

    @Column(name = "image")
    private String image;
    
    @Column(name = "descriptions")
    private String description;

    @Column(name = "category_id")
    private Long category_id;
    
    @Column(name = "soft_delete")
    private Boolean soft_delete;
}
