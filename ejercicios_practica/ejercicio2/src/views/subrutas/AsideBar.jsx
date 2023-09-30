import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function AsideBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/InicioSubRuta"> InicioSubRuta</NavLink>
        </li>
        <li>
          <NavLink to="/SubRuta1"> Subruta1</NavLink>
        </li>
        <li>
          <NavLink to="/SubRuta2"> Subruta2</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default AsideBar;
