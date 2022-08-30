import React from 'react';
import style from "../footer/Footer.module.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";

const {
    container_footer,
    top_section,
    bottom_section,
    container_social,
    social_logos,
    container_contact,
    contact,
    agreement,
    brand,
    containerWidth,
    bottom_title
} = style

const Footer = () => {
  return (
    <>
    <div className={containerWidth}>
    <div className={container_footer}>
        <div className={top_section}>
            <div className={brand}>
                <h1>TecnoStore </h1>
                <h5>Tecnología a tu alcance</h5>
            </div>
            <div className={container_social}>
                <h5>SIGUENOS</h5>
                <div className={social_logos}>
                    <img src={facebook} alt='facebook'/>
                    <img src={instagram} alt='instagram'/>
                    <img src={twitter} alt='twitter'/>
                </div> 
            </div>
            <div  className={container_contact}>
                <h5>LLAMANOS</h5>
                <div className={contact}>
                   <p>+54 9 11425678</p> 
                </div>
            </div>
        </div>
        
    </div>
    <hr/>
    <div className={bottom_section}>
        <div className={bottom_title}>
            <h6>2022 NO COUNTRY</h6> 
        </div>
        <div className={agreement}>
            <h6>POLÍTICAS DE PRIVACIDAD</h6>
            <h6>TÉRMINOS Y CONDICIONES</h6>
        </div>     
    </div>
    </div>
    </>
  )
}

export default Footer