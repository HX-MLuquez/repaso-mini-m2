import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

export default function FormCreate({ addCharacter }) {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    edad: "",
    fuerza: "",
    img: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    edad: "",
    fuerza: "",
    img: "",
  });
  function validate(inputs) {
    const errors = {};
    if (!inputs.name) {
      errors.name = "debe tener nombre";
    } else if (inputs.name.length < 4) {
      errors.name = "debe tener mas de 4 caracteres";
    } else if (!inputs.edad) {
      errors.edad = "debe tener edad";
    }
    if (!inputs.fuerza) {
      errors.fuerza = "debe tener fuerza";
    }
    if (!inputs.img) {
      errors.img = "debe tener image";
    }
    return errors;
  }

  function handleInput(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.value,
      })
    );
  }
  function handleSubmit(e) {
    e.preventDefault();
    const aux = Object.keys(errors);
    if (aux.length === 0) {
      addCharacter(inputs);
      setInputs({
        name: "",
        edad: "",
        fuerza: "",
        img: "",
      });
      setErrors({
        name: "",
        edad: "",
        fuerza: "",
        img: "",
      });
      navigate("/");
      return alert("is create");
      // ;
    }
    return alert("Error");
  }
  return (
    console.log("inputs is", inputs),
    (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input name="name" value={inputs.name} onChange={handleInput}></input>
          <p className="danger">{errors.name}</p>
          <label>Edad:</label>
          <input name="edad" value={inputs.edad} onChange={handleInput}></input>
          <p className="danger">{errors.edad}</p>
          <label>Fuerza:</label>
          <input
            name="fuerza"
            value={inputs.fuerza}
            onChange={handleInput}
          ></input>
          <p className="danger">{errors.fuerza}</p>

          <label>Image:</label>
          <input name="img" value={inputs.img} onChange={handleInput}></input>
          <p className="danger">{errors.img}</p>
          {Object.keys(errors).length === 0 ? (
            <button type="submit">Crear</button>
          ) : null}
        </form>
      </div>
    )
  );
}
/*
{
    name: "",
    edad: "",
    fuerza: "",
    img: ""
  }
*/
