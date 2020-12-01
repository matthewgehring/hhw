import React, {useState, useEffect} from "react";
import Drum from '../Drum/Drum';
import {Link} from 'react-router-dom';
//this page should show all open drums and allow you to create a drumnpm 

function Labpack() {

  useEffect(() => {
    fetchDrums();
  }, []);

  const [drums, setDrums] = useState([]);

  const fetchDrums = async () => {
    const data = await fetch('http://localhost:3000/drums');
    const drums = await data.json();
    setDrums(drums);
  }

    return (
      <div>
        <h1>Labpack</h1>
        <Link className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" to={'/createdrum'}>Create New Drum</Link>
        {drums.map(drum => (
          <h1 key={drum.id}>
          <Link to={`/labpack/${drum.properties.Num}`}>{`${drum.properties.Num}`}</Link>
          </h1>
        ))}
      </div>
  );
}

export default Labpack;