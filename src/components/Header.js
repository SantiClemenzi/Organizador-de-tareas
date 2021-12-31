// importamos el Font awsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// importamos el icono
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// creamos componente
const Header = () => {
	return (
		<header className="header">
			<h1 className="header__tittle">Lista de tareas</h1>
			<button className="header__boton">
				ocultar tareas hechas
				<FontAwesomeIcon icon={faEyeSlash} className="header__icono-boton" />
			</button>
		</header>
	);
};

export default Header;
