import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Person() {
  
  const [name, setName] = useState('Identificate');
  const [lastName, setLastName] = useState(''); 
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    if(name !== 'Identificate'){ handleDeleteClick()}
    e.preventDefault();
    const newName = document.getElementById("name").value;
    const newLastName = document.getElementById("lastName").value;
    setName(newName)
    setLastName(newLastName)
    navigate(`${newName}/${newLastName}`, { replace: true });
  };

  const handleDeleteClick = () => {
    navigate(`/person`);
  };

  return (
    <div>
      <h1>
        Welcome: {name} {lastName}
      </h1>
      <form>
        <ul>
          <li>
            <input type="text" id="name" placeholder="Nombre" />
            <input type="text" id="lastName" placeholder="Apellido" />
            {name == 'Identificate' && (
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          )}
            <button onClick={handleDeleteClick}>Delete</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

