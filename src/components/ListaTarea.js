import react from 'react';
import Tarea from './Tarea';

const ListaTareas = ({ tareas }) => {
	return (
		<ul className="lista-tareas">
			{tareas.length > 0 ? (
				tareas.map((tarea) => {
					return <Tarea tarea={tarea} key={tarea.id}/>
				})
			) : (
				<div  className="lista-tareas__mensaje"><h2>~NO HAY TAREAS~</h2></div>
			)}
		</ul>
	);
};

export default ListaTareas;
