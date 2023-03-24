import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import FormCreate from "./components/FormCreate";
import Detail from "./components/Detail";
import Login from "./components/Login";

let charTest = {
  name: "Mau",
  edad: "555",
  fuerza: "ninguna",
  img: "https://m.media-amazon.com/images/M/MV5BMjY5MTI3OGEtMTgyYy00ODM0LWIzNGQtNTdmYjE0MDY3MjE3XkEyXkFqcGdeQXVyMTA1NjE5MTAz._V1_.jpg",
};

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setCharacters([charTest]);
    !access && navigate("/");
  }, []);

  function deleteChar(name){
    const result = characters.filter((ch)=> ch.name !== name)
    setCharacters(result)
  }

  function addCharacter(ch) {
    let character = ch;
    setCharacters([...characters, character]);
  }
  function editCharacter(charEdit){
    let result = characters.filter((ch)=>{
      if(charEdit.name===ch.name){
        return charEdit
      }
      return ch
    })
    setCharacters(result)
  }

  function loginAccess() {
    setAccess(true);
    navigate("/home");
  }
  function logout(){
    setAccess(false);
    navigate("/");
  }

  return (
    console.log("chars", characters),
    (
      <div className="App">
        {location.pathname === "/" ? null : <NavBar deleteChar={deleteChar} logout={logout}></NavBar>}
        <Routes>
          <Route path="/" element={<Login loginAccess={loginAccess} />}></Route>
          <Route
            path="/home"
            element={<Home characters={characters} />}
          ></Route>
          <Route
            path="/form/:type"
            element={<FormCreate addCharacter={addCharacter} editCharacter={editCharacter} />}
          ></Route>
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


  params {
    type: undefined,
    id: undefined
  }
*/
