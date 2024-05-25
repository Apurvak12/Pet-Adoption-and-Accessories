import React, { useState } from "react";
import imagehero1 from "../ImageHero/imagehero1.jpg";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./Contact.css"
const Contact = () => {
   
    const [firstName,setFirstName]=useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const submit = (e) => {
        e.preventDefault();
        if (firstName.length === 0 || lastName.length === 0 ) {
            alert("Name can't be empty!")
        }
        else if (email.length === 0) {
            alert("Please provide a valid Email ID!")
        }
        else {
            alert("Form submitted!")
        }
    }
    return (
            <>
            <div className="ContactUs-main">
                <div className="form">
                    <form onSubmit={submit}>
                     <div className="main">
                         <p> FILL YOUR DETAILS HERE. </p>
                         <div className="input-fields">
                            <input type="text"
            placeholder="Enter your first name"
             onChange={e=>setFirstName(e.target.value)}
          name="fName"/>
          <input type="text"
          placeholder="Enter your last name"
           name="lName"
           onChange={e=>setLastName(e.target.value)} /> 
           <input type="text"
          placeholder="Enter your email"
                    name="email"  
           onChange={e=>setEmail(e.target.value)}  /> 
           <button className="submit-Button" type="submit">Submit</button>
                         </div>
                        </div>   
                    </form>
         
            <div className="list"><ul>
                       <li className="guide-head">A guide to donation: </li>
                        <li>Rehoming or donating your pet should be easy and stress-free both for you and your pet.</li>
                        <li>We have created a reliable, simple & free initiative to help you rehome your pet from your loving family directly to another family.</li>
                        <li>Make your pet look more attractive to potential new owners. Make sure your pet is vaccinated and checked by a veterinarian. </li>
                        <li>Be transparent/clear with the new owner. Share all the details about your pet's personality.</li>
                    </ul>
                     <div className="footer1">
                    <div className="footer-div">
                        <div className="first">
                            <p>We as an Organization!</p>
                        </div>
                        <div className="para">We are a dedicated organization committed to facilitating animal adoption and providing high-quality pet accessories. Our mission is to create a seamless and stress-free adoption process for both pets and their new families, ensuring every pet finds a loving home. Additionally, we offer a range of pet accessories designed to enhance the well-being and happiness of your furry companions..</div>
                    <div className="motto">Animal safety | Adoption | Accessories </div>
                          </div>
                </div>
                    </div>  
                </div>
                
                </div>
                <div className="footer2">
                   <div className="footer-text"> @2023| by adoptadoggo foundation</div> 
                   <div className="icon-section">
                <a href={() => false}><FacebookIcon /></a>
                    <a href={() => false}><InstagramIcon /></a>
                    <a href={() => false}><TwitterIcon /></a>
                    <a href={() => false}><MailOutlineIcon /></a>
                </div>
                
                </div>
        </>
        )
    }

export default Contact;