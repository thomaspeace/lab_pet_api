import { useEffect, useState } from "react"
import PetForm from "../components/PetForm"
import PetList from "../components/PetList"

const PetContainer = () => {

  const[pets, setPets] = useState([])

  const fetchPets = async () => {
    const response = await fetch("http://localhost:8080/pets")
    const data = await response.json()
    setPets(data)
  }

  useEffect(() => {
    fetchPets()
  }, [])

  const postPet = async (newPet) => {
    //create a new chocolate in the db
    const response = await fetch("http://localhost:8080/pets", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newPet)
    })
    // this is because we expect the saved pet back when we add a pet to the database
    const savedPet = await response.json()
    setPets([savedPet, ...pets]) 
  }

  const deletePet = async (id) => {
    // we don't need to store it as anything as we don't get anything back
    await fetch(`http://localhost:8080/pets/${id}`, {
      method: "DELETE",
      header: {"Content-Type": "application/json"}
      // dont need a body, as we don't need a request body for a delete request
    })

    // setting the chocolates to all chocolates except the ones we're deleting
    setPets(pets.filter((pet) => pet.id !== id))
  }

  return(
    <>
    <h1>Pet Database</h1>
    <PetForm postPet={postPet}/>
    {pets ? <PetList pets={pets} deletePet={deletePet}/> : <p>Loading database...</p>}
    </>
  )
}

export default PetContainer