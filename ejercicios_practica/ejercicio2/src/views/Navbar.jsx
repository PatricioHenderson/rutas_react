import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  // Define un array de objetos que representan los enlaces
  const links = [
    { path: "/", label: "Inicio" },
    { path: "/Componente1", label: "Componente 1" },
    { path: "/Componente2", label: "Componente 2" },
    {path: "/Subruta", label: "Subruta"},
    { path: "/a", label: "Ir al componente erroneo" },
    { path: "/person", label: "Persona"},
  ];

  return (
    <nav>
      <ul>
        {links.map((link) => (
          // Verifica si la ubicación actual coincide con el enlace y evita renderizarlo
          location.pathname !== link.path && (
            <li key={link.path}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          )
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
