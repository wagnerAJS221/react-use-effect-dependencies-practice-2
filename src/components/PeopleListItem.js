import { useEffect, useState } from "react";

function PeopleListItem(props) {
  const { person } = props;

  const [homeworld, setHomeworld] = useState('');

  console.log("person", person)

  return (
    <ul>
      <li>{person.name} - Homeworld: {homeworld}</li>
    </ul>
  );
}

export default PeopleListItem;
