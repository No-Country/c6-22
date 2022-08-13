package com.nocountry.ecommerce.persistence.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "orders")
public class Order {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;
    
    @Column(name = "ammount" , nullable = false)
    private Float totalAmmount;

    @Column(name = "date" , nullable = false)
    private String date;

    @Column(name = "status" , nullable = false)
    private String status;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;
}
