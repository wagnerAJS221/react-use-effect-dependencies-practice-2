import { useState } from "react";

function StarshipsListItem(props) {
  const { starship } = props;

  const [firstPilot, setFirstPilot] = useState('')

  console.log({ starship });

  return <li>{starship.name} - First Pilot {firstPilot}</li>;
}

export default StarshipsListItem;
