// import React from "react";
// import { useState } from "react";
// import image1 from "../Imageshero/dog.jpg";
// import image2 from "../Imageshero/cat.jpg";

// import "./about.css";
// import CountUp from "react-countup";
// import Footer from "./footer";
// const About = () => {
//   const [SelectImage,setSelectImage]=useState(0);
//   const[allImage,setallImage]=useState([image1,image2])
//   return (
//     <>
//       <section className="About-wrapper">
//         <div className="paddings innerWidth flexCenter About-container">
//           <div className=" flexColStart About-left">
//             <div className="About-title">
//               <div className="circle" />
//               <div className="f-circle" />
//               <div className="s-circle" />

//               <h1>
//                 Find your <br /> paw-perfect
//                 <br />
//                 friend
//               </h1>
//             </div>
//             <div className="count">
//               <h1>#AdoptLove campaign</h1>
//             </div>
//             <div className="flexColStart About-desc">
//               <span>Gift a home to the cutest paws of your choice.</span>
//               <span>Bring home your tail-trail partner.</span>
//             </div>
//             <div className="search-bar">
//               <input type="text" placeholder="Hey,look for me here!" />
//               <button className="Button">Search</button>
//             </div>
//           </div>
// <div>
//   <img src="image1" alt="dogo"></img>
// </div>
//           {/* <div className=" flexCenter About-right">
//             <div className="image-container">
//               <img src="./about-img.jpg" alt="cute doggo img"></img>
//             </div>
//           </div> */}
//         </div>
//         <div className="stats">
//           <div className="stat">
//             <span>
//               <CountUp start={1000} end={9000} duration={2.75} />
//               <span>+</span>
//             </span>
//             <p class="text">pets adopted</p>
//           </div>
//           <div className="stat">
//             <span>
//               <CountUp start={1000} end={6000} duration={2.75} />
//               <span>+</span>
//             </span>
//             <p class="text"> paw-tnerships</p>
//           </div>

//           <div className="stat">
//             <span>
//               <CountUp start={100} end={1000} duration={4} />
//               <span>+</span>
//             </span>
//             <p class="text"> Lives Connected</p>
//           </div>
//           <div></div>
//         </div>
//       </section>
//      <Footer/>
//     </>
//   );
// };
// export default About;
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./about.css"; 
import Footer from "./footer";

import image1 from '../Imageshero/dog.jpg';
import image2 from '../Imageshero/cat.jpg';
import image3 from '../Imageshero/lovebirds.jpg';
import image4 from '../Imageshero/rabbit.jpg';
import image5 from '../Imageshero/parrot.jpg';
import image6 from '../Imageshero/fish.jpg';

function About() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <section className="About-wrapper">
      <div className="paddings innerWidth flexCenter About-container">
          <div className=" flexColStart About-left">
            <div className="About-title">
              <div className="circle" />
            <div className="f-circle" />
           <div className="s-circle" />
                  <h1>
                Find your <br /> FurEver
                <br />
                Friend
             </h1>
         </div>
         <div className="count">
               <h1>#FurEverHomeFinds</h1>
            </div>
             <div className="flexColStart About-desc">
               <span>Gift a home to the cutest Fur of your choice.</span>
              <span>Bring home your tail-trail partner</span>
        </div>
</div>
</div>        

      <div className="content">
        <div className="carousel-container">
          <Carousel 
            activeIndex={index} 
            onSelect={handleSelect} 
            interval={5000} 
            pause={false}
          >
            <Carousel.Item>
              <img className="carousel-image" src={image1} alt="First slide" />
              <Carousel.Caption>
                <h3>"Celebrate Unconditional Love: Meet Our Adorable Dogs!"</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={image2} alt="Second slide" />
              <Carousel.Caption>
                <h3>"Embrace Feline Charm: Meet Our Adorable Cats!"</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={image3} alt="Third slide" />
              <Carousel.Caption>
                <h3>"Discover Avian Elegance: Meet Our Lovely Love Birds!"</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={image4} alt="Fourth slide" />
              <Carousel.Caption>
                <h3>"Experience Bunny Bliss: Meet Our Adorable Rabbits!"</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={image5} alt="Fifth slide" />
              <Carousel.Caption>
                <h3>"Encounter Vibrant Personalities: Meet Our Colorful Parrots!"</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={image6} alt="Sixth slide" />
              <Carousel.Caption>
                <h3>"Encounter Vibrant Personalities: Meet Our Colorful Parrots!"</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
       </section>
      <Footer />
    </>
  );
}

export default About;
