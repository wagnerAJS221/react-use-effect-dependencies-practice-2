import { useEffect, useState } from 'react'

function PeopleListItem(props) {
  const { person } = props

  console.log('person', person)

  const [homeworld, setHomeworld] = useState('')

  useEffect(() => {
    fetch(person.homeworld)
      .then((res) => res.json())
      .then((planetData) => setHomeworld(planetData.name))
  }, [person])

  return (
    <ul>
      <li>
        {person.name} - Homeworld: {homeworld}
      </li>
    </ul>
  )
}

export default PeopleListItem
