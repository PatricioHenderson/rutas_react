import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Componente1 from "../views/Componente1";
import Componente2 from "../views/Componente2";
import Error404 from "../views/Error404";
import Home from "../views/Home";
import Navbar from "../views/Navbar";
import Person from "../views/Person";
import RouterSubRutas from "./RouterSubRutas";
import InicioSubRuta from "../views/subrutas/InicioSubruta";
import SubRuta1 from "../views/subrutas/SubRuta1";
import SubRuta2 from "../views/subrutas/SubRuta2";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Componente1" element={<Componente1 />} />
        <Route path="/Componente2" element={<Componente2 />} />
        <Route path="/Person" element={<Person />} />
        <Route path="/Person/:nombre/:apellido" element={<Person />} />
        <Route path="/Person/:nombre" element={<Person />} />
        <Route path="/SubRuta" element={<RouterSubRutas />}>
          <Route index element={<InicioSubRuta />} />
          <Route path="subruta1" element={<SubRuta1 />} />
          <Route path="subruta2" element={<SubRuta2 />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
