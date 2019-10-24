import React, {useState, Fragment} from 'react';

function Formulario() {

  const [cita, guardarCita] = useState({
    mascota : '',
    propietario : '',
    fecha : '',
    hora : '',
    sintomas : ''
  });

  const handleChange = e => {
    guardarCita({
      ...cita,
      [e.target.name] : e.target.value
    });
  };

  console.log(cita);

  return(
    <Fragment>
      <h2>Crear Cita</h2>

      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la Mascota"
          onChange={handleChange}
        />

        <label>Fecha</label>
        <input
          type="date"
          className="u-full-width"
          name="fecha"
          onChange={handleChange}
        />

        <label>Hora</label>
        <input
          type="time"
          className="u-full-width"
          name="hora"
          onChange={handleChange}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="button-primary u-full-width">Agregar</button>
      </form>
    </Fragment>
  )
}

function App() {

  //useState retorna 2 funciones
  // state actual = this.state; // citas
  // función que actualiza el state = this.setState(); // guardarCita
  const [citas, guardarCitas] = useState([]);

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="one-half column">
          <Formulario/>
        </div>
        <div className="one-half column">

        </div>
     </div>
     </Fragment >
  )
}

export default App;