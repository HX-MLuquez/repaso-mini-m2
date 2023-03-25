import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import FormCreate from "./components/FormCreate";
import Detail from "./components/Detail";
import Login from "./components/Login";

let charTest = {
  id: "900",
  name: "Mauuu",
  age: "555",
  force: "ninguna",
  img: "https://m.media-amazon.com/images/M/MV5BMjY5MTI3OGEtMTgyYy00ODM0LWIzNGQtNTdmYjE0MDY3MjE3XkEyXkFqcGdeQXVyMTA1NjE5MTAz._V1_.jpg",
  name_search: "",
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

  function deleteChar(name) {
    const result = characters.filter((ch) => ch.name !== name);
    setCharacters(result);
  }

  function addCharacter(ch) {
    const idCharacter = uuidv4();
    let character = ch;
    character.id = idCharacter;
    setCharacters([...characters, character]);
  }
  function editCharacter(charEdit) {
    let result = characters.map((ch) => {
      if (charEdit.id === ch.id) {
        // en este condicional al matchear por id este es el único campo que no se puede editar
        ch = charEdit;
      }
      return ch;
    });
    setCharacters(result);
  }

  function loginAccess() {
    setAccess(true);
    navigate("/home");
  }
  function logout() {
    setAccess(false);
    navigate("/");
  }

  return (
    // console.log("chars", characters),
    <div className="App">
      {location.pathname === "/" ? null : <NavBar logout={logout}></NavBar>}
      <Routes>
        <Route path="/" element={<Login loginAccess={loginAccess} />}></Route>
        <Route path="/home" element={<Home characters={characters} />}></Route>
        <Route
          path="/form/:type"
          element={
            <FormCreate
              addCharacter={addCharacter}
              editCharacter={editCharacter}
              characters={characters}
              deleteChar={deleteChar}
            />
          }
        ></Route>
        <Route path="/detail/:id" element={<Detail characters={characters}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

/*
{
    name: "",
    age: "",
    force: "",
    img: ""
  }


  params {
    type: undefined,
    id: undefined
  }
*/
