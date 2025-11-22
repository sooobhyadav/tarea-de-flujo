import { useState } from "react";

export default function AddPetForm({ setPets }) {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setPets(prev => prev.concat({ name, species, age, id: Date.now() }));
    setName("");
    setSpecies("");
    setAge("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New Pet</legend>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <input value={species} onChange={e => setSpecies(e.target.value)} placeholder="Species" />
        <input value={age} onChange={e => setAge(e.target.value)} placeholder="Age" />
        <button>Add Pet</button>
      </fieldset>
    </form>
  );
}
