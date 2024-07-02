import { useState } from "react"

const PetForm = ({ postPet }) => {

  const[name, setName] = useState("")
  const[type, setType] = useState("")
  const[breed, setBreed] = useState("")
  const[age, setAge] = useState(0)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const newPet = {
      name,
      type,
      breed,
      age
    }
    postPet(newPet)
  }
  

  return(
    <>
      <h4>Add pet:</h4>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)}/>
        <input type="text" placeholder="Breed" value={breed} onChange={(e) => setBreed(e.target.value)}/>
        <input type="number" placeholder="Age" value={age} min={0} onChange={(e) => setAge(e.target.value)}/>
        <input type="submit" value="Add pet!" />
      </form>
    </>
  )
}

export default PetForm