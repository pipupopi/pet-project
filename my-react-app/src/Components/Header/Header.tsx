import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function Header() {
  const isLogin = useSelector((state: any) => state.isLogin);
  const dispatch = useDispatch();

  function logOut() {
    localStorage.removeItem("LogIn");
    dispatch({
      type: "IS_LOGIN",
      payload: false,
    });
  }

  return (
    <header className="header">
      <Link to={"/"}>
        <button className="btn_home">Домой</button>
      </Link>
      {isLogin ? (
        <Link to={"/authorization"}>
          <button className="btn_login" onClick={logOut}>
            Выйти
          </button>
        </Link>
      ) : (
        <Link to={"/authorization"}>
          <button className="btn_login">Войти</button>
        </Link>
      )}
    </header>
  );
}

export { Header };
