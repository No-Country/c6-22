package com.nocountry.ecommerce.persistence.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class OrderDetailFK implements Serializable {

  private static final long serialVersionUID = 7973579121503816607L;
  
  @Column(name = "order_id")
  private Long orderId;

  @Column(name = "product_id")
  private Long productId;
}
