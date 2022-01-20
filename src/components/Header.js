// importamos el Font awsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// importamos el icono
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// creamos componente
const Header = ({ cambiarMostrarCompletadas, mostrarCompletadas }) => {
	return (
		<header className="header">
			<h1 className="header__tittle">Lista de tareas</h1>
			{/* ejecutamos el boton deseado */}
			{mostrarCompletadas ? (
				<button
					className="header__boton"
					onClick={() => cambiarMostrarCompletadas(false)} //ocultamos las tareas echas
				>
					Ocultar tareas hechas
					<FontAwesomeIcon icon={faEyeSlash} className="header__icono-boton" />
				</button>
			) : (
				<button
					className="header__boton"
					onClick={() => cambiarMostrarCompletadas(true)} //mostramos todas las tareas
				>
					Mostrar tareas hechas
					<FontAwesomeIcon icon={faEye} className="header__icono-boton" />
				</button>
			)}
		</header>
	);
};

export default Header;
