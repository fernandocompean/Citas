import React, {useState} from 'react';

function App() {

  //useState retorna 2 funciones
  // state actual = this.state; // citas
  // función que actualiza el state = this.setState(); // guardarCita
  const [citas, guardarCita ] = useState([]);
  console.log(citas)
  return (
    <h1>hola</h1>
  )
}

export default App;