package com.nocountry.ecommerce.persistence.model;

import javax.persistence.Column;
import javax.persistence.Entity;
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
    
    @Column(name = "order_id")
    private Long order_id;

    @Column(name = "product_id")
    private Long product_id;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "price")
    private Float price;

}
