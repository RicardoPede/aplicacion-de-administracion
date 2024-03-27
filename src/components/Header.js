import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Aplicación de Administración</h1>
            <hr/>
            <div className="links">
                <NavLink to="/" className="link" activeClassName="clase-activa" exact>Lista</NavLink>
                <NavLink to="/add" className="link" activeClassName="clase-activa">Agregar</NavLink>
            </div>
        </header>
    );
}

export default Header;
