import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "red" : "blue",
              })}
            >
              Inicio con NavLink
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
