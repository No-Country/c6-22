package com.nocountry.ecommerce.persistence.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "products")
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;
    
    @Column(name = "name" , nullable = false)
    private String name;
    
    @Column(name = "price" , nullable = false)
    private Float price;

    @Column(name = "stock" , nullable = false)
    private Integer stock;
    
    @Column(name = "brand" , nullable = false)
    private String brand;

    @Column(name = "image" , nullable = false)
    private String image;
    
    @Column(name = "descriptions")
    private String description;

    @ManyToOne
    private Category category;
    
    @Column(name = "soft_delete" , columnDefinition = "boolean default false")
    private Boolean softDelete;
}
