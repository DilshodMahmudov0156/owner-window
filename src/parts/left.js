import React from 'react';
import {NavLink} from "react-router-dom";

function Left(props) {
    const activer = ({isActive}) => {
        return (isActive? "my-link active": "my-link");
    }
    return (
        <div className="left">

            <NavLink to="/" className={activer}>
                <span className="link-icon">
                    <i className="bi bi-house-door-fill"></i>
                </span>
                Asosiy
            </NavLink>

            <NavLink to="/buyurtmalar" className={activer}>
                <span className="link-icon">
                    <i className="bi bi-bell-fill"></i>
                </span>
                Buyurtmalar
            </NavLink>

            <NavLink to="/izohlar" className={activer}>
                <span className="link-icon">
                    <i className="bi bi-chat-right-text-fill"></i>
                </span>
                Habarlar
            </NavLink>

            <NavLink to="/sozlamalar" className={activer}>
                <span className="link-icon">
                    <i className="bi bi-gear-fill"></i>
                </span>
                Sozlamalar
            </NavLink>

        </div>
    );
}

export default Left;