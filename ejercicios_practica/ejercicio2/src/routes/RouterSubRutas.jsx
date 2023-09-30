import React from "react";
import { BrowserRouter, Routes, NavLink, Outlet } from "react-router-dom";

import AsideBar from "../views/subrutas/AsideBar";
import InicioSubRuta from "../views/subrutas/InicioSubruta";
import SubRuta1 from "../views/subrutas/SubRuta1";
import SubRuta2 from "../views/subrutas/SubRuta2";

function RouterSubRutas() {
  return (
    <div>
      <NavLink to="/SubRuta"> Inicio </NavLink>
      <NavLink to="/subruta/SubRuta1"> Subruta 1 </NavLink>
      <NavLink to="/subruta/SubRuta2"> Subruta 2 </NavLink>
      <Outlet />
    </div>
  );
}

export default RouterSubRutas;
