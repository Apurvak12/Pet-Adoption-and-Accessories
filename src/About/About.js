
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./about.css"; 
import Footer from "./footer";
import imagehero from "../ImageHero/imagehero.jpg";
import CountUp from "react-countup";

function About() {
    const backgroundImageStyle = {
        backgroundImage: `url(${imagehero})`,
        backgroundSize: 'cover',
  backgroundPosition: 'center',
  
      };
  return (
    <>
    <section className="section hero has-bg-image" id="home" aria-label="home" style={backgroundImageStyle} >
       
      </section>
      <section>
        <div className="stats">
           <div className="stat">
             <span>
               <CountUp start={1000} end={9000} duration={2.75} />
               <span>+</span>
             </span>
             <p class="text">pets adopted</p>
           </div>
           <div className="stat">
             <span>
               <CountUp start={1000} end={6000} duration={2.75} />
              <span>+</span>
             </span>
             <p class="text"> paw-tnerships</p>
         </div>
<div className="stat">
            <span>
              <CountUp start={100} end={1000} duration={4} />
              <span>+</span>
           </span>
          <p class="text"> Lives Connected</p>
         </div>
         <div></div>
       </div>
       </section>
      <Footer />
    </>
  );
}

export default About;
