export default function Pet({ id, name, species, age, setPets }) {

  function handleDelete() {
    setPets(prev => prev.filter(pet => pet.id !== id));
  }

  return (
    <li>
      {name} is a {species} and is {age} years old.
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
