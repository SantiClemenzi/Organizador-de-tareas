// importamos el hook useState
import react, {useState} from 'react';
// importamos el modulo de id aleatorio
import {v4 as uuidv4} from 'uuid';
// importamos el Font awsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// importamos el icono
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const FormularioTareas = ({tareas, agregarTareas}) => {
    // controlamos el estado del input
    const [inputTarea, inputAgregarTarea] = useState('');

    // creamos la funcion para recibir lo que se escribe en el input
    const handleInput = (e) =>{
        inputAgregarTarea(e.target.value);
    }
    // agregamos la nueva tarea al array
    const handleSubmit = (e) =>{
        e.preventDefault();
        agregarTareas([
            ...tareas,
            {id:uuidv4(),
            tarea:inputTarea,
            completada:false}
        ]);
    }
	return (
		<form action="" className="formulario-tareas" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="escribe una tarea"
				className="formulario-tareas__input"
                value={inputTarea}
                onChange={(e)=> handleInput(e)}
			></input>
			<button type="submit" className="formulario-tareas__btn">
				<FontAwesomeIcon
					icon={faPlusCircle}
					className="formulario-tareas__icono-btn"
				/>
			</button>
		</form>
	);
};

export default FormularioTareas;
