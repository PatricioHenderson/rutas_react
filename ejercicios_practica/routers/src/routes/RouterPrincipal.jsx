import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Contact from "../views/Contact";
import Error404 from "../views/Error404";

export default function RouterPrincipal() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    );
}