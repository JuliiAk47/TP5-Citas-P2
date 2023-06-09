import { useState } from 'react';
import Titulos from './Titulo/Titulo';
import Formulario from './Form/Form';
import Card from './Card/Card';
import SubTitulos from './SubTitulo/SubTitulo';
import './App.css';

function App() {
  const [citas, setCitas] = useState([])

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);

  }
  
  const eliminarCita = (id)=>{
      setCitas(citas.filter(cita => cita.id !== id));
  }

  return (
    <div id="root">
      <header>
      <Titulos Titulo='ADMINISTRADOR DE PACIENTES'/>
      <div class="container">
        <div class="row">
            <div class="one-half column">
            <SubTitulos Subtitulo='Crear mi cita'/>
            
            <Formulario agregarCita={agregarCita} titulo='Nombre Mascota:' textoInput="Nombre de Mascota"/>
                
            </div>
            <div class="one-half column">
            <SubTitulos Subtitulo='Administra tus citas'/>
            {citas.map(cita => <Card borrar={eliminarCita} id={cita.id} mascota={cita.mascota} dueño={cita.propietario} fecha={cita.fecha} hora={cita.hora} sintomas={cita.sintomas}/>)}
            </div>
      </div>
    </div>
    </header>
    </div>
    
  );
}

export default App;