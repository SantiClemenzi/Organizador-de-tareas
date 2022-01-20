import Tarea from './Tarea';

// en esta funcion pasamos los atributos de tarea
const ListaTareas = ({ tareas, agregarTareas, mostrarCompletadas }) => {
	// ejecutamos la funcion para cambiar estado de completada
	const toggleCompletada = (id) => {
		// recorremos el objeto de las tareas
		agregarTareas(
			tareas.map((tarea) => {
				// realizamos el cambio de estado si la condicion se cumple
				if (tarea.id === id) {
					return { ...tarea, completada: !tarea.completada };
				} else {
					return tarea;
				}
			})
		);
	};

	// actualizamos tarea
	const upDateTarea = (id, textoUpDate) => {
		agregarTareas(
			tareas.map((tarea) => {
				if (tarea.id === id) {
					return { ...tarea, texto: textoUpDate };
				} else {
					return tarea;
				}
			})
		);
	};

	// eliminamos tarea
	const eliminarTarea = (id) => {
		agregarTareas(
			tareas.filter((tarea) => {
				if (tarea.id !== id) {
					return tarea;
				}
			})
		);
	};
	return (
		<ul className="lista-tareas">
			{/* creamos condicional si hay tarea cargada o no */}
			{tareas.length > 0 ? (
				tareas.map((tarea) => {
					if (mostrarCompletadas) {
						//mostramos todas las tareas
						return (
							<Tarea
								tarea={tarea}
								key={tarea.id}
								toggleCompletada={toggleCompletada}
								upDateTarea={upDateTarea}
								eliminarTarea={eliminarTarea}
							/>
						);
					} else if (!tarea.completada) {
						//ocultamos las tareas echas
						return (
							<Tarea
								tarea={tarea}
								key={tarea.id}
								toggleCompletada={toggleCompletada}
								upDateTarea={upDateTarea}
								eliminarTarea={eliminarTarea}
							/>
						);
					}
					return;
				})
			) : (
				<div className="lista-tareas__mensaje">
					<h2>~NO HAY TAREAS~</h2>
				</div>
			)}
		</ul>
	);
};

export default ListaTareas;
