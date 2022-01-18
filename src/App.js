import './App.css';
import { useState } from 'react';
// importamos los componentes
import Header from './components/Header';
import FormularioTareas from './components/FormularioTareas';
import ListaTareas from './components/ListaTarea';

const App = () => {
	// en este hook se van a guardar todas las tareas
	const [tareas, agregarTareas] = useState([]);
	// imprimimos las tareas por consola
	console.log(tareas);

	return (
		<div className="contenedor">
			<Header />
			<FormularioTareas tareas={tareas} agregarTareas={agregarTareas} />
			<ListaTareas tareas={tareas}/>
		</div>
	);
};

export default App;
