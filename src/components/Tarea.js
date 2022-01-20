import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faCheckSquare,
	faSquare,
	faEdit,
	faTimes,
} from '@fortawesome/free-solid-svg-icons';

// creamos la estructura de cada tarea
const Tarea = ({ tarea, toggleCompletada, upDateTarea, eliminarTarea}) => {
	// hook para ejecutar el form
	const [editandoTarea, cambiarEditandoTarea] = useState(false);

	// hook para cambiar el valor del input
	const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);

	// funcion evitar el refrecamiento de la pagiana
	const handleSubmit = (e) => {
		e.preventDefault();
		// funcion para cargar la nueva tarea
        upDateTarea(tarea.id, nuevaTarea);
		cambiarEditandoTarea(false);
	};
	return (
		<li className="lista-tareas__tarea">
			<FontAwesomeIcon
				// creamos condicional para que el icono cambie
				icon={tarea.completada ? faCheckSquare : faSquare}
				// ejecutamos la funcion toggleCompletada
				onClick={() => toggleCompletada(tarea.id)}
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
								// establecemos una variable en el value para que sea dinamico
								value={nuevaTarea}
								// funcion que va a modificar el input
								onChange={(e) => cambiarNuevaTarea(e.target.value)}
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
					// ejecutamos funcion para activar el form
					onClick={() => cambiarEditandoTarea(!editandoTarea)}
					className="lista-tareas__texto lista-tareas__icono-accion"
				/>

				<FontAwesomeIcon
					icon={faTimes}
					onClick={() => eliminarTarea(tarea.id)}
					className="lista-tareas__texto lista-tareas__icono-accion"
				/>
			</div>
		</li>
	);
};

export default Tarea;
