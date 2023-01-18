import React from "react";
import './FindFilm.css'

function FindFilm() {
  return (
    <form>
      <input
        type="text"
        placeholder="Введите название..."
        className="find-input"
      />
    </form>
  );
}

export { FindFilm };
