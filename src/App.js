import './App.css';
import { useEffect, useState } from 'react';
// importamos los componentes
import Header from './components/Header';
import FormularioTareas from './components/FormularioTareas';
import ListaTareas from './components/ListaTarea';

const App = () => {
	// variable para cargar en el estado de tareas
	var tareasGuardadas = localStorage.getItem('tareas')? JSON.parse(localStorage.getItem('tareas')):[];

	// en este hook se van a guardar todas las tareas
	const [tareas, agregarTareas] = useState(tareasGuardadas);

	// hook para guardar las tareas al localStorage 
	useEffect(()=>{
		localStorage.setItem('tareas', JSON.stringify(tareas));
	},[tareas])

	// accedemos al localStorage y verificamos si la variable es null o no
	var mostrarCompletadasG = '';
	if(localStorage.getItem('estadoCompletada')===null){
		mostrarCompletadasG = true;
	}
	else{
		mostrarCompletadasG = localStorage.getItem('estadoCompletada') === 'true';
	}
	
	// hook para mostrar tareas completadas o no
	const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(mostrarCompletadasG);
	
	// hook para guardar el estado de mostrarCompletadas al localStorage
	useEffect(()=>{
		localStorage.setItem('estadoCompletada', mostrarCompletadas.toString());
	},[mostrarCompletadas])

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
