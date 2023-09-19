import { useState } from "react";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";
import Formulario from "./components/Formulario";

function App() {

  const [formIsVisible, setFormIsVisible] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('alanmdsan')

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formIsVisible && (<Formulario />)}
      
      <button type="button" onClick={() => setFormIsVisible( ! formIsVisible)}>toggle form</button> */}
    </>
  )
}

export default App
