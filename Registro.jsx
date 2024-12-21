import React, { useState } from 'react';
import './Registro.css';
import Menu from './Menu';

// PROGRAMADORA: VANESSA NOEMÍ CALDERÓN BELTRÁN
// GRUPO: 2-1

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [contra, setContra] = useState('');

  return (
    <>
    <Menu /> 
   <div className="containerRegistro">
      <form className="recuadroRegistro">
        <h2 className='h2Registro'>Iniciar Sesión</h2>
        <div className="inputsRegistro">
          <label className='etiquetaRegistro'>Usuario:</label>
          <input type="text" className='inputRegistro' id="usuario" placeholder="Usuario aquí:" required/>
        </div>
        <div className="inputsRegistro">
          <label className='etiquetaRegistro'>Contraseña:</label>
          <input type="password" className='inputRegistro' id="contra" placeholder="Contraseña aquí:" required/>
        </div>
        <button onClick={() => setUsuario(usuario = '') && setContra(contra = '')} type="submit" className="buttonRegistro">Ingresar</button>
      </form>
    </div>
    </>
  );
}


