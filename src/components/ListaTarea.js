import Tarea from './Tarea';

// en esta funcion pasamos los atributos de tarea
const ListaTareas = ({ tareas, agregarTareas }) => {
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
					return (
						<Tarea
							tarea={tarea}
							key={tarea.id}
							toggleCompletada={toggleCompletada}
							upDateTarea={upDateTarea}
							eliminarTarea={eliminarTarea}
						/>
					);
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
