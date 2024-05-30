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

// import PetCard from "./PetCard";
// import "./PetShop.css";
// function PetShop() {
//   const dogs = [
//     {
//       weight: {
//         imperial: "6 - 13",
//         metric: "3 - 6",
//       },
//       height: {
//         imperial: "9 - 11.5",
//         metric: "23 - 29",
//       },
//       id: 1,
//       name: "Affenpinscher",
//       bred_for: "Small rodent hunting, lapdog",
//       breed_group: "Toy",
//       life_span: "10 - 12 years",
//       temperament:
//         "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
//       origin: "Germany, France",
//       image: require("./images/1.jpeg"),
//     },
//     {
//       weight: {
//         imperial: "50 - 60",
//         metric: "23 - 27",
//       },
//       height: {
//         imperial: "25 - 27",
//         metric: "64 - 69",
//       },
//       id: 2,
//       name: "Afghan Hound",
//       country_code: "AG",
//       bred_for: "Coursing and hunting",
//       breed_group: "Hound",
//       life_span: "10 - 13 years",
//       temperament: "Aloof, Clownish, Dignified, Independent, Happy",
//       origin: "Afghanistan, Iran, Pakistan",
//       image: require("./images/2.jpg"),
//     },
//     {
//       weight: {
//         imperial: "44 - 66",
//         metric: "20 - 30",
//       },
//       height: {
//         imperial: "30",
//         metric: "76",
//       },
//       id: 3,
//       name: "African Hunting Dog",
//       bred_for: "A wild pack animal",
//       life_span: "11 years",
//       temperament: "Wild, Hardworking, Dutiful",
//       origin: "",
//       image: require("./images/3.jpeg"),
//     },
//     {
//       weight: {
//         imperial: "40 - 65",
//         metric: "18 - 29",
//       },
//       height: {
//         imperial: "21 - 23",
//         metric: "53 - 58",
//       },
//       id: 4,
//       name: "Airedale Terrier",
//       bred_for: "Badger, otter hunting",
//       breed_group: "Terrier",
//       life_span: "10 - 13 years",
//       temperament:
//         "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
//       origin: "United Kingdom, England",
//       image: require("./images/4.jpg"),
//     },
//     {
//       weight: {
//         imperial: "90 - 120",
//         metric: "41 - 54",
//       },
//       height: {
//         imperial: "28 - 34",
//         metric: "71 - 86",
//       },
//       id: 5,
//       name: "Akbash Dog",
//       bred_for: "Sheep guarding",
//       breed_group: "Working",
//       life_span: "10 - 12 years",
//       temperament: "Loyal, Independent, Intelligent, Brave",
//       origin: "",
//       image: require("./images/5.jpg"),
//     },
//     {
//       weight: {
//         imperial: "65 - 115",
//         metric: "29 - 52",
//       },
//       height: {
//         imperial: "24 - 28",
//         metric: "61 - 71",
//       },
//       id: 6,
//       name: "Akita",
//       bred_for: "Hunting bears",
//       breed_group: "Working",
//       life_span: "10 - 14 years",
//       temperament:
//         "Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous",
//       image: require("./images/6.jpeg"),
//     },
//     // {
//     //   weight: {
//     //     imperial: "55 - 90",
//     //     metric: "25 - 41",
//     //   },
//     //   height: {
//     //     imperial: "18 - 24",
//     //     metric: "46 - 61",
//     //   },
//     //   id: 7,
//     //   name: "Alapaha Blue Blood Bulldog",
//     //   description:
//     //     "The Alapaha Blue Blood Bulldog is a well-developed, exaggerated bulldog with a broad head and natural drop ears. The prominent muzzle is covered by loose upper lips. The prominent eyes are set well apart. The Alapaha's coat is relatively short and fairly stiff. Preferred colors are blue merle, brown merle, or red merle all trimmed in white or chocolate and white. Also preferred are the glass eyes (blue) or marble eyes (brown and blue mixed in a single eye). The ears and tail are never trimmed or docked. The body is sturdy and very muscular. The well-muscled hips are narrower than the chest. The straight back is as long as the dog is high at the shoulders. The dewclaws are never removed and the feet are cat-like.",
//     //   bred_for: "Guarding",
//     //   breed_group: "Mixed",
//     //   life_span: "12 - 13 years",
//     //   history: "",
//     //   temperament: "Loving, Protective, Trainable, Dutiful, Responsible",
//     //   image: require("./images/7.jpg"),
//     // },
//     {
//       weight: {
//         imperial: "38 - 50",
//         metric: "17 - 23",
//       },
//       height: {
//         imperial: "23 - 26",
//         metric: "58 - 66",
//       },
//       id: 8,
//       name: "Alaskan Husky",
//       bred_for: "Sled pulling",
//       breed_group: "Mixed",
//       life_span: "10 - 13 years",
//       temperament: "Friendly, Energetic, Loyal, Gentle, Confident",
//       image: require("./images/8.jpg"),
//     },
//     {
//       weight: {
//         imperial: "65 - 100",
//         metric: "29 - 45",
//       },
//       height: {
//         imperial: "23 - 25",
//         metric: "58 - 64",
//       },
//       id: 9,
//       name: "Alaskan Malamute",
//       bred_for: "Hauling heavy freight, Sled pulling",
//       breed_group: "Working",
//       life_span: "12 - 15 years",
//       temperament: "Friendly, Affectionate, Devoted, Loyal, Dignified, Playful",
//       image: require("./images/9.jpg"),
//     },
//     // {
//     //   weight: {
//     //     imperial: "60 - 120",
//     //     metric: "27 - 54",
//     //   },
//     //   height: {
//     //     imperial: "22 - 27",
//     //     metric: "56 - 69",
//     //   },
//     //   id: 10,
//     //   name: "American Bulldog",
//     //   breed_group: "Working",
//     //   life_span: "10 - 12 years",
//     //   temperament:
//     //     "Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant",
//     //   image: require("./images/10.jpeg"),
//     // },

//   ];

//   return (
//     <>
//       <div className="Shop">
//         <h1 className="PetShop-heading">Welcome to your dream shop!</h1>
//         <div className="started">
//         <p>Get Started</p>
//         <ul>
//           <li><b>Browse Available Dogs:</b> Click on a dog's profile to learn more about their background, personality traits, and any special needs or requirements they may have. Get to know them a little better before making your decision.</li>
//           <li><b>Learn More:</b> Click on a dog's profile to learn more about their background, personality traits, and any special needs or requirements they may have. Get to know them a little better before making your decision.</li>
//           <li><b>Make Your Choice: </b>Found the one? Great! Take your time to consider your decision carefully. Remember, adopting a dog is a lifelong commitment, so make sure you're ready to welcome a new furry family member into your home.</li>
//           <li><b>Contact Us:</b>Ready to take the next step? Contact us to schedule a meet-and-greet with your chosen dog. We'll arrange a time for you to visit and spend some quality time getting to know each other.</li>
//         </ul></div></div>
      
//       <div>
//         {dogs.map((val) => (
//           <PetCard
//             key={val.id}
//             life={val.life_span}
//             name={val.name}
//             breed={val.breed_group}
//             image={val.image} // Check if 'image' exists
//             price={val.price}
//             temperament={val.temperament}
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// export default PetShop;

