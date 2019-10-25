import React, {useState, Fragment} from 'react';

function Cita({cita}) {
  return(
    <div className="cita">
      <p>Mascota: <span>{cita.mascota}</span></p>
      <p>Dueño: <span>{cita.propietario}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Sintomas: <span>{cita.sintomas}</span></p>
    </div>
  )
}


function Formulario({ crearCita}) {

  const stateInicial = {
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  }

  const [cita, actualizarCita] = useState(stateInicial);

  const actualizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name] : e.target.value
    });
  };

  const enviarCita = e => {
    e.preventDefault();

    //pasar la cita hacia el componente principal
    crearCita(cita);
    //reiniciar el state (form)
    actualizarCita(stateInicial);
    console.log(cita);
  };

  return(
    <Fragment>
      <h2>Crear Cita</h2>

      <form onSubmit={enviarCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={cita.mascota}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la Mascota"
          onChange={actualizarState}
          value={cita.propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          className="u-full-width"
          name="fecha"
          onChange={actualizarState}
          value={cita.fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          className="u-full-width"
          name="hora"
          onChange={actualizarState}
          value={cita.hora}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={cita.sintomas}
        ></textarea>

        <button type="submit" className="button-primary u-full-width">Agregar</button>
      </form>
    </Fragment>
  )
}

function App() {
  //useState retorna 2 funciones
  // state actual = this.state; // citas
  // función que actualiza el state = this.setState(); // guardarCitas
  const [citas, guardarCitas] = useState([]);

  //agregar las nuevas citas al state
  const crearCita = cita => {
    //tomar una copia del state y agregar el nuevo cliente
    const nuevasCitas = [...citas, cita]
    //almacenamos en state
    guardarCitas(nuevasCitas);
    
  }

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="one-half column">
          <Formulario
            crearCita={crearCita}
          />
        </div>
        <div className="one-half column">
          {citas.map((cita, index) => (
            <Cita
              key={index}
              index={index}
              cita={cita}
            />
          ))}
        </div>
     </div>
     </Fragment >
  )
}

export default App;