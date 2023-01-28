import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./authorization.css";
import { DEFAULT_PASSWORD, DEFAULT_LOGIN } from "../../const";
import { useDispatch } from "react-redux";
import { tr } from "date-fns/locale";

function Authorization() {
  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [checkLogIn, setCheckLogIn] = useState<boolean>(false);
  const dispatch = useDispatch();

  function Authorization() {
    if (login === DEFAULT_LOGIN && password === DEFAULT_PASSWORD) {
      setCheckLogIn(true);
      localStorage.setItem("logIn", JSON.stringify("true"));
    } else {
      setCheckLogIn(false);
      alert("Нет такого аккаунта!");
    }
  }

  useEffect(() => {
    if (checkLogIn) {
      dispatch({
        type: "IS_LOGIN",
        payload: true,
      });
    }
  }, [checkLogIn]);

  return (
    <div className="block-autho">
      <Link to={"/"}>
        <img src="/svg/exit.svg" className="btn-exit" />
      </Link>
      <p className="title">Авторизоваться</p>
      <div className="form">
        <form>
          <p className="text-form">Логин:</p>
          <input
            onChange={(event) => {
              setLogin(event.target.value);
            }}
            className="login-input"
            type="text"
            placeholder="Введите логин..."
          />
          <p className="text-form">Пароль:</p>
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            className="login-input"
            type="text"
            placeholder="Введите пароль..."
          />
        </form>
      </div>
      <div className="btn-sign-in">
        {checkLogIn ? (
          <Link to={"/"}>
            <button onClick={Authorization} className="btn-log-in">
              Войти в аккаунт
            </button>
          </Link>
        ) : (
          <button onClick={Authorization} className="btn-log-in">
            Войти в аккаунт
          </button>
        )}
      </div>
    </div>
  );
}

export { Authorization };
