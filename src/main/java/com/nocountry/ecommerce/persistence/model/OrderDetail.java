package com.nocountry.ecommerce.persistence.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
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
@Table(name = "orders_details")
public class OrderDetail {
    
    @ManyToMany
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToMany
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "quantity" , nullable = false)
    private Integer quantity;

    @Column(name = "price" , nullable = false)
    private Float price;

}
