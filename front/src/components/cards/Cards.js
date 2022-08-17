import React from 'react'
import styles from "../cards/Cards.module.css"
import { Link } from "react-router-dom"

const {cardProducts, productImg, productInfo, cart, productContent} = styles

const Cards = (props) => {


  return (
   
    <div className={cardProducts} style={{width:"14rem"}}>     
        <div className={productImg}>
            <img src={props.img} alt="..." />
        </div>    
        <div className={productInfo}>
        <a className={cart} href="#"><svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.75 7.75H19.25L17.6128 14.7081C17.4002 15.6115 16.5941 16.25 15.666 16.25H11.5395C10.632 16.25 9.83827 15.639 9.60606 14.7618L7.75 7.75ZM7.75 7.75L7 4.75H4.75"/>
              <circle cx="10" cy="19" r="1" fill="currentColor"/>
              <circle cx="17" cy="19" r="1" fill="currentColor"/></svg>
            </a>
            <div className={productContent}>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
            <br></br>
            <h5>$ 1999.99</h5>
            <br></br>
            <Link to={`${props.id}`}>SEE MORE</Link>
            </div>
        </div>
    </div> 
   
  )
}

export default Cards