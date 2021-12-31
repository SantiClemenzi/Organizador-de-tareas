import './App.css';
import react, {useState} from 'react';
// importamos el modulo de id aleatorio
import {v4 as uuidv4} from 'uuid';
// importamos los componentes
import Header from './components/Header';
import FormularioTareas from './components/FormularioTareas';

const App = () => {
  // en este hook se van a guardar todas las tareas
  const [tareas, agregarTareas] = useState([
    {id:uuidv4(),
    tarea:'salir a correr',
    completada:false},
    {id:uuidv4(),
    tarea:'lavar los platos',
    completada:false},
    {id:uuidv4(),
    tarea:'cortar el pasto',
    completada:false}
  ]);
// imprimimos las tareas por consola
  console.log(tareas);

  return (
    <div className='contenedor'>
      <Header/>
      <FormularioTareas tareas={tareas} agregarTareas={agregarTareas}/>
    </div>
  );
}

export default App;
