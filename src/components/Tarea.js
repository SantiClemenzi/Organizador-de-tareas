import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faCheckSquare,
	faSquare,
	faEdit,
	faTimes,
} from '@fortawesome/free-solid-svg-icons';

// creamos la estructura de cada tarea
const Tarea = ({ tarea, toggleCompletada, upDateTarea, eliminarTarea }) => {
	// hook para ejecutar el form
	const [editandoTarea, cambiarEditandoTarea] = useState(false);

	// hook para cambiar el valor del input
	const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);

	// funcion evitar el refrecamiento de la pagiana
	const handleSubmit = (e) => {
		e.preventDefault();
		upDateTarea(tarea.id, nuevaTarea); // funcion para cargar la nueva tarea
		cambiarEditandoTarea(false);
	};
	return (
		<li className="lista-tareas__tarea">
			<FontAwesomeIcon
				icon={tarea.completada ? faCheckSquare : faSquare} // creamos condicional para que el icono cambie
				onClick={() => toggleCompletada(tarea.id)} // ejecutamos la funcion toggleCompletada
				className="lista-tareas__icono lista-tareas__icono-check"
			/>
			<div className="lista-tareas__texto">
				{
					// ejecutamos condicional para activar el form
					editandoTarea ? (
						<form
							action=""
							onSubmit={handleSubmit}
							className="formulario-editar-tarea"
						>
							<input
								type="text"
								className="formulario-editar-tarea__input "
								value={nuevaTarea} // establecemos una variable en el value para que sea dinamico
								onChange={(e) => cambiarNuevaTarea(e.target.value)} // funcion que va a modificar el input
							></input>
							<button type="submit" className="formulario-editar-tarea__btn">
								Actualizar
							</button>
						</form>
					) : (
						tarea.texto
					)
				}
			</div>
			<div className="lista-tareas__contenedor-botones">
				<FontAwesomeIcon
					icon={faEdit}
					onClick={() => cambiarEditandoTarea(!editandoTarea)} // ejecutamos funcion para activar el form
					className="lista-tareas__texto lista-tareas__icono-accion"
				/>

				<FontAwesomeIcon
					icon={faTimes}
					onClick={() => eliminarTarea(tarea.id)} //ejecutamos funcion para activar el from
					className="lista-tareas__texto lista-tareas__icono-accion"
				/>
			</div>
		</li>
	);
};

export default Tarea;
