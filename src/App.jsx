import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import FormCreate from "./components/FormCreate";
import Detail from "./components/Detail";

let charTest = {
  name: "Mau",
  edad: "555",
  fuerza: "ninguna",
  img: "https://m.media-amazon.com/images/M/MV5BMjY5MTI3OGEtMTgyYy00ODM0LWIzNGQtNTdmYjE0MDY3MjE3XkEyXkFqcGdeQXVyMTA1NjE5MTAz._V1_.jpg",
};

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters([charTest]);
  }, []);

  function addCharacter(ch){
    let character = ch
    setCharacters([
      ...characters, character
    ])
  }

  return (
    console.log("chars", characters),
    (
      <div className="App">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home characters={characters} />}></Route>
          <Route path="/form" element={<FormCreate addCharacter={addCharacter} />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
      </div>
    )
  );
}

export default App;

/*
{
    name: "",
    edad: "",
    fuerza: "",
    img: ""
  }
*/
