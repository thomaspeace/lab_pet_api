const Pet = ({ pet, deletePet }) => {

  const handleDelete = () => {
    deletePet(pet.id)
  }

  return(
    <div class="pet-item">
      <h3>{pet.name}</h3>
      <p>Type: {pet.type}</p>
      <p>Breed: {pet.breed}</p>
      <p>Age: {pet.age}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Pet