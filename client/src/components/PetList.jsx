import Pet from "./Pet"

const PetList = ({ pets, deletePet }) => {


  const petComponents = pets.map((pet) => {
    return(
      <div class="pet-div">
      <Pet
        pet = {pet}
        key = {pet.id}
        deletePet={deletePet}/>
      </div>  
    )
  })

  return(
    <>
      <h2>Pets:</h2>
      {petComponents}
    </>
  )
}

export default PetList