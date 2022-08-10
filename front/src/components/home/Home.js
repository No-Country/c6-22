import React from "react";
import styles from "../home/Home.module.css";
import chair from "../../assets/chair.png";
import lupa from "../../assets/lupa.png";

export const Home = () => {

  return (<>
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">nomos</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">SHOPS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">PAGES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">BLOGS</a>
          </li>
        </ul> 
      </div>
    </div>
</nav>
      <div className={styles.icons}>
        <ul className="navbar mx-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#"><img  src={lupa}/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">🙎‍♂️</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">🛒</a>
            </li>
          </ul>
      </div>

      {/* <div className={styles.cardContainer}>
        <div className={styles.card}>

            <div className={styles.cardText}>

              <div className={styles.text}>
                <h3>Title</h3>
                <p>text text text text text text text text text text text text text text text text text text</p>
              </div> 

            </div>

            <div className={styles.cardImage}>
                <img src={chair} alt=""/>
                <h3>Title</h3>
                <p>text text text text text text text text text text text text text text text text text text</p>
            </div>
            
        </div>
      </div> */}
      <div className={styles.cardContainer}>
        <div className={styles.cardText}>
          <div className={styles.text}>
            <h1>Dining Chair</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <p>120.00 $</p>
            <p><span></span>SHOP NOW</p>
            
          </div>
          
        </div>
        <div >
          <div className={styles.circle}>
          </div>  
         <div className={styles.cardImg}>         
          <img src={chair} width="350"/>
         </div>
         </div> 
         
      </div>

      <div className={styles.cardContainer} style={{backgroundColor:"rgb(224, 190, 215)"}}>
        
        <div>
          <div className={styles.circle}>
           <div className={styles.circle2}>
          </div>   
          </div>  
          

         <div className={styles.cardImg}>         
          <img src={chair} width="350"/>
         </div>
         </div> 

      <div className={styles.cardText}>
          <div className={styles.text}>
            <h1>Dining Chair</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <p>120.00 $</p>
          </div>
          
        </div>


         
      </div>
     
      <div className={styles.cardContainer}>
        <div className={styles.cardText}>
          <div className={styles.text}>
            <h1>Dining Chair</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <p>120.00 $</p>
          </div>
          
        </div>
        <div >
          <div className={styles.circle}>
          </div>  
         <div className={styles.cardImg}>         
          <img src={chair} width="350"/>
         </div>
         </div> 
         
      </div>
     
     
</>)
};
