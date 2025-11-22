import { useState, useEffect } from "react";
import OurHeader from "./components/OurHeader";
import LikeArea from "./components/LikeArea";
import OurTimeArea from "./components/OurTimeArea";
import AddPetForm from "./components/AddPetForm";
import Pet from "./components/Pet";
import OurFooter from "./components/OurFooter";

export default function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("examplePetData")) {
      setPets(JSON.parse(localStorage.getItem("examplePetData")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("examplePetData", JSON.stringify(pets));
  }, [pets]);

  return (
    <>
      <OurHeader />
      <LikeArea />
      <OurTimeArea />
      <AddPetForm setPets={setPets} />
      <ul>
        {pets.map((pet) => (
          <Pet
            setPets={setPets}
            id={pet.id}
            name={pet.name}
            species={pet.species}
            age={pet.age}
            key={pet.id}
          />
        ))}
      </ul>
      <OurFooter />
    </>
  );
}
