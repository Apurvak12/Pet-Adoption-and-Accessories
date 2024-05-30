import React, { useState } from "react";
import "./PetShop.css";

function PetCard(props) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        
        setModal(!modal);
        document.body.classList.toggle("active-modal", !modal);
        
    };

    return (
        <div className="card">
            <img src={props.image} alt="DoggoImg" className="card_img" />
            <div className="card_info">
                <span className="Dog_name">{props.name}</span>
                <br />
                <span className="Dog_info">Breed: {props.breed}</span>
                <br />
                <span className="Dog_info">Life Span: {props.life}</span>
                <button onClick={()=>toggleModal()} className="btn-modal">
                    <strong>Click To Adopt Me!</strong>
                </button>
            </div>
{modal}
            {modal && (
                <div className="modal">
                    <div className="overlay" onClick={toggleModal}></div>
                    <div className="modal-content">
                        <h2>GREAT CHOICE!</h2>
                        <p>
                            {props.name} is a {props.temperament} dog.
                            <br />
                            <br />
                            Buy Your Perfect Canine Match at an Affordable Adoption Price.
                            <br />
                            For further interaction and adoption procedure:
                            <br />
                        </p>
                        <button className="book-modal">Add To Cart!</button>
                        <button className="close-modal" onClick={toggleModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PetCard;