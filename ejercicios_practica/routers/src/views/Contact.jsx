import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
    let [messageSent, setMessageSent] = useState(false);

    const handleSendMessage = () => {
        setMessageSent(true);
    }

    return (
        <div>
            <h1> Contacto</h1>
            <Link to={"/"}> Ir al componente de inicio</Link>
            <form>
                <div>
                    <label htmlFor="name"> Nombre: </label>
                    <input type="text" id="name" name="user_name" />
                </div>
                <div>
                    <label htmlFor="message"> Mensaje</label>
                    <input type="text" id="message" name="message" />
                </div>
                <button type="button" onClick={handleSendMessage}>Enviar mensaje</button>
            </form>
            <div>
                {messageSent ? "Gracias por enviar su mensaje" : "Mensaje no enviado"}
            </div>
        </div>
    );
}

export default Contact;
