import React, { useEffect, useState } from "react";
import "./Form.css";
import { useNavigate, useParams } from "react-router-dom";

export default function FormCreate({
  addCharacter,
  editCharacter,
  deleteChar,
  characters,
}) {
  const navigate = useNavigate();
  const { type } = useParams();
  // console.log("type ", type);

  const [inputs, setInputs] = useState({
    id:"",
    name: "",
    age: "",
    force: "",
    img: "",
    name_search: "",
  });
  const [errors, setErrors] = useState({
    id:"",
    name: "",
    age: "",
    force: "",
    img: "",
  });
  function validate(inputs) {
    const errors = {};
    if (!inputs.name) {
      errors.name = "debe tener nombre";
    } else if (inputs.name.length < 4) {
      errors.name = "debe tener mas de 4 caracteres";
    } else if (!inputs.age) {
      errors.age = "debe tener age";
    }
    if (!inputs.force) {
      errors.force = "debe tener force";
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

  function search(name) {
    let character = characters.find((ch) => ch.name === name);
    character.name_search = inputs.name_search;
    setInputs(character);
    setErrors({});
  }

  function handleSubmit(e) {
    e.preventDefault();
    const aux = Object.keys(errors);
    if (aux.length === 0) {
      if (type === "edit") {
        editCharacter(inputs);
        alert("is edit");
      } else if (type === "delete") {
        deleteChar(inputs.name_search);
        alert("is delete");
      } else {
        addCharacter(inputs);
        alert("is create");
      }

      setInputs({
        id:"",
        name: "",
        age: "",
        force: "",
        img: "",
        name_search: "",
      });
      setErrors({
        id:"",
        name: "",
        age: "",
        force: "",
        img: "",
      });
      navigate("/home");
      return "ok";
      // ;
    }
    return alert("Error");
  }
  return (
    // console.log("inputs is", inputs),
    <div className="form">
      {type === "edit" || type === "delete" ? (
        <div>
          <label>Select Name:</label>
          <input
            name="name_search"
            value={inputs.name_search}
            onChange={handleInput}
            placeholder="insert name search"
          ></input>
          <button onClick={() => search(inputs.name_search)}>Search</button>
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" value={inputs.name} onChange={handleInput}></input>
        <p className="danger">{errors.name}</p>
        <label>Age:</label>
        <input name="age" value={inputs.age} onChange={handleInput}></input>
        <p className="danger">{errors.age}</p>
        <label>Force:</label>
        <input name="force" value={inputs.force} onChange={handleInput}></input>
        <p className="danger">{errors.force}</p>

        <label>Image:</label>
        <input name="img" value={inputs.img} onChange={handleInput}></input>
        <p className="danger">{errors.img}</p>
        {Object.keys(errors).length === 0 ? (
          type === "edit" ? (
            <button type="submit">Edit</button>
          ) : (
            type === "create" && <button type="submit">Create</button>
          )
        ) : null}
        {inputs.name_search.length === 0
          ? null
          : type === "delete" && <button type="submit">Delete</button>}
      </form>
    </div>
  );
}
/*
{
    name: "",
    age: "",
    force: "",
    img: ""
  }
*/

/*
 useParams {
    type: create,
    id: undefined
  }
*/
