import React from 'react';
import swal from 'sweetalert';
import styles from "./Contact.module.css";
import location from "../../assets/location.png";
import tel from "../../assets/telephone.png";
import letter from "../../assets/letter.png";
import watch from "../../assets/watch.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
const {
    container_footer,
    map,
    footer,
    container_information,
    card_info,
    card_container,
    container_subscribe,
    container_email,
    social_media
} = styles

const Contact = () => {

    const handleSubscribe = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const regexpEmail = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/
        if(email === ''){
            swal("Los campos no pueden estar vacios", "", "info");
            return;
        }
        if(email !== '' && !regexpEmail.test(email)){
            swal("Ingresa un correo válido", "", "error");
            return;
        }
        else{
            swal("Te has subscripto correctamente","", "success");
        }
    }
  return (
    <>
    <div className={container_footer}>
    <div className={map}>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.23949906467!2d-58.43329845000001!3d-34.615823750000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1661563844111!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>   
    </div>
    <div className={footer}>
        <div>
            <h4>CONTACT US </h4>
            <div className={container_information}>
                <div className={card_container}>
                    <div className={card_info}>
                        <img src={location} alt="location" /> 
                        <h6>ADDRESS</h6>
                        <p>Av. Buenos Aires 123</p>
                    </div>
                    <div className={card_info}>
                        <img src={tel} alt="telephone" /> 
                        <h6>TELEPHONE</h6>
                        <p>+54 9 11425678</p>
                    </div>
                </div> 
                <div className={card_container}>
                    <div className={card_info}>
                        <img src={letter} alt="email" />
                        <h6>E-MAIL</h6> 
                        <p>email@email.com</p>
                    </div>
                    <div className={card_info}>
                        <img src={watch} alt="watch" />
                        <h6>WORKING HOUR</h6> 
                        <p>365 days a year</p>
                    </div>
                </div>     
            </div>
            </div>
        <div className={container_subscribe}>
            <h4>NEWSLETTER</h4>
            <div className={container_email}>
                <p>Subscribe to our newsletter for special offers</p>
                <form onSubmit={handleSubscribe}>
                    <input 
                        placeholder='Email'
                        type="email"
                        name="email"  
                        autoFocus>
                    </input>
                    <button type="submit">SUBSCRIBE</button>
                </form>
            </div>
            
            <div className={social_media}>
                <img src={facebook} alt='facebook'/>
                <img src={instagram} alt='instagram'/>
                <img src={twitter} alt='twitter'/>
            </div>
        </div>  
    </div>
    </div>
    </>
  )
}

export default Contact