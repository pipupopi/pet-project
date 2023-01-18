import React from "react";
import './Header.css'
function Header() {
    return (
        <header className="header">
            <button className="btn_home">Домой</button>
            <button className="btn_login">Войти</button>
        </header>
    )
}

export {Header}