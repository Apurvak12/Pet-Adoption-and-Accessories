import React, { useState } from "react";
import PetCard from "./PetCard";
import "./PetShop.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function PetShop() {
  const [filter, setFilter] = useState("All");

  const pets = [
    {
      id: 1,
      name: "Affenpinscher",
      breed_group: "Toy",
      life_span: "10 - 12 years",
      temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
      image: require("./images/1.jpeg"),
      type: "Dog",
    },
    {
      id: 2,
      name: "Afghan Hound",
      breed_group: "Hound",
      life_span: "10 - 13 years",
      temperament: "Aloof, Clownish, Dignified, Independent, Happy",
      image: require("./images/8.jpg"),
      type: "Dog",
    },
    {
      id: 3,
      name: "Pom Dog",
      breed_group: "Pomeranian",
      life_span: "12-16 years",
      temperament: "Aloof, Clownish, Dignified, Independent, Happy",
      image: require("./images/9.jpg"),
      type: "Dog",
    },
    {
      id: 4,
      name: "Bengal Cat",
      breed_group: "Bengal",
      life_span: "12 - 15 years",
      temperament: "Alert, Agile, Energetic, Demanding, Intelligent",
      image: require("./images/cat2.jpg"),
      type: "Cat",
    },
    {
      id: 5,
      name: "Siamese Cat",
      breed_group: "Siam",
      life_span: "13 - 14 years",
      temperament: "Highly intelligent and very vocal",
      image: require("./images/cat3.webp"),
      type: "Cat",
    },
    {
      id: 6,
      name: "Tabby Cat",
      breed_group: "Grey Tigerm",
      life_span: "15 - 20 years",
      temperament: "Domestic cat that has a shape of M on its forehead formed by the combination of stripes and patterns present on its coat.",
      image: require("./images/cat4.jpg"),
      type: "Cat",
    },
    {
      id: 7,
      name: "Munchkin Cat",
      breed_group: "Dachshund ",
      life_span: "12 - 15 years",
      temperament: "characterized by short legs. They are playful and intelligent breed weighing around 3-4 kg",
      image: require("./images/cat5.jpg"),
      type: "Cat",
    },
    {
      id: 8,
      name: "Goldfish",
      breed_group: "Fish",
      life_span: "9 - 10 years",
      temperament: "Peaceful",
      image: require("./images/fish1.jpg"),
      type: "Fish",
    },
    {
      id: 9,
      name: "Catfish",
      breed_group: "Ictalurus furcatus",
      life_span: "10 - 15 years",
      temperament: "Known for its adaptability and hardiness,Thrive in various water conditions",
      image: require("./images/fish2.jpg"),
      type: "Fish",
    },
    {
      id: 10,
      name: "Tangs",
      breed_group: "Zebrasoma flavescens",
      life_span: "11 - 12 years",
      temperament: "Highly popular species of saltwater aquarium fish.characterized by their laterally compress",
      image: require("./images/fish3.webp"),
      type: "Fish",
    },
    {
      id: 11,
      name: "Netherland Dwarf Rabbit",
      breed_group: "Dwarf",
      life_span: "7 - 10 years",
      temperament: "Gentle, Affectionate",
      image: require("./images/rabbit1.avif"),
      type: "Rabbit",
    },
    {
      id: 12,
      name: "Dutch",
      breed_group: "Dwarf",
      life_span: "10-12 years",
      temperament: "bi-colored markings,one of the most familiar rabbits,breed is small, ranging from 3.5 to 5.5 pounds",
      image: require("./images/rabbit2.webp"),
      type: "Rabbit",
    },
    {
      id: 13,
      name: "Holland Lop",
      breed_group: "Dwarf",
      life_span: "10-12 years",
      temperament: "Docile and easier to handle.Less than 4 pounds",
      image: require("./images/rabbit4.webp"),
      type: "Rabbit",
    },
    {
      id: 14,
      name: "Parakeet",
      breed_group: "Bird",
      life_span: "10 - 15 years",
      temperament: "Friendly, Sociable",
      image: require("./images/bird1.jpg"),
      type: "Bird",
    },
    {
      id: 15,
      name: "Hyacinth Macaws ",
      breed_group: "Bird",
      life_span: "10 - 15 years",
      temperament: "Sociable and friendly birds",
      image: require("./images/bird2.webp"),
      type: "Bird",
    },
    {
      id: 16,
      name: "Cockatiel",
      breed_group: "Bird",
      life_span: "10 - 15 years",
      temperament: "They’re very emotional,the crest on the top of their head reflects how they feel",
      image: require("./images/bird3.webp"),
      type: "Bird",
    },
    {
      id: 17,
      name: "Red-Eared Slider",
      breed_group: "Turtle",
      life_span: "20 - 40 years",
      temperament: "Easygoing, Shy",
      image: require("./images/turtle1.jpg"),
      type: "Turtle",
    },
    {
      id: 18,
      name: "Ornate Box Turtle",
      breed_group: "Terrapene",
      life_span: "30 - 40 years",
      temperament: "beautiful, colorful species.distinctive patterning on their shells forms a series of yellow to orange stripes",
      image: require("./images/turtle2.webp"),
      type: "Turtle",
    },
    {
      id: 19,
      name: "Reeves Turtle",
      breed_group: "Mauremys",
      life_span: "20 - 30 years",
      temperament: "Semi-aquatic species prefers slower-moving waters such as marshes or ponds, often with muddy substrates",
      image: require("./images/turtle3.webp"),
      type: "Turtle",
    },
    {
      id: 20,
      name: "Eastern Gray Squirrel",
      breed_group: "Squirrel",
      life_span: "6 - 12 years",
      temperament: "Curious, Energetic",
       image: require("./images/squirrel1.webp"),
      type: "Squirrel",
    },
    {
      id: 21,
      name: "American Red Squirrel",
      breed_group: "Squirrel",
      life_span: "8 - 14 years",
      temperament: " dexterous, and are both right and left handed.They can hold and extract nuts and seeds,as well as climb well through the tree canopy",
       image: require("./images/squirrel4.jpg"),
      type: "Squirrel",
    },
    {
      id: 22,
      name: "Indian Giant Squirrel",
      breed_group: "Ratufa indica",
      life_span: "10 - 12 years",
      temperament: "live alone, high up in trees, constructing large, globe-like nests from twigs and leaves",
       image: require("./images/squirrel3.webp"),
      type: "Squirrel",
    },
    // Add more pets here
  ];

  const filteredPets = filter === "All" ? pets : pets.filter((pet) => pet.type === filter);

  return (
    <>
      <div className="Shop">
        <h1 className="PetShop-heading">Welcome to your dream shop!</h1>
        <div className="filters">
          {["All", "Dog", "Cat", "Fish", "Rabbit", "Bird", "Turtle", "Squirrel"].map((type) => (
            <button
              key={type}
              className={filter === type ? "active" : ""}
              onClick={() => setFilter(type)}
            >
              {type === "Dog" && <i className="fas fa-dog"></i>}
              {type === "Cat" && <i className="fas fa-cat"></i>}
              {type === "Fish" && <i className="fa-solid fa-fish-fins"></i>}
              {type === "Rabbit" && <i className="fas fa-rabbit-fast"></i>}
              {type === "Bird" && <i className="fas fa-dove"></i>}
              {type === "Turtle" && <i className="fas fa-otter"></i>}
              {type === "Squirrel" && <i className="fas fa-acorn"></i>}
              {type === "All" && <i className="fas fa-paw"></i>}
              {type}
            </button>
          ))}
        </div>
      </div>
      <div>
        {filteredPets.map((val) => (
          <PetCard
            key={val.id}
            life={val.life_span}
            name={val.name}
            breed={val.breed_group}
            image={val.image}
            price={val.price}
            temperament={val.temperament}
          />
        ))}
      </div>
    </>
  );
}

export default PetShop;



