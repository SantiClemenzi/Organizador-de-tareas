import './App.css';
import { useState } from 'react';
// importamos los componentes
import Header from './components/Header';
import FormularioTareas from './components/FormularioTareas';
import ListaTareas from './components/ListaTarea';

const App = () => {
	// en este hook se van a guardar todas las tareas
	const [tareas, agregarTareas] = useState([]);

	// hook para mostrar tareas completadas o no
	const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(false);
	return (
		<div className="contenedor">
			<Header
				cambiarMostrarCompletadas={cambiarMostrarCompletadas}
				mostrarCompletadas={mostrarCompletadas}
			/>

			<FormularioTareas tareas={tareas} agregarTareas={agregarTareas} />

			<ListaTareas
				tareas={tareas}
				agregarTareas={agregarTareas}
				mostrarCompletadas={mostrarCompletadas}
			/>
		</div>
	);
};

export default App;
