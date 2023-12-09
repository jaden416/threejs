import { useState, useEffect } from "react"

export default function People() {
  
  const [people, setPeople] = useState([])

  const getPeople = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const result = await response.json()
    console.log(result)
    setPeople(result)
  }

  useEffect(()=>{
    getPeople()
  })
  return (<>
  <ul>
    {people.map((person)=>{
      return <li key={person.id}>{person.name}</li>
    })}
  </ul>
  </>
  )

}