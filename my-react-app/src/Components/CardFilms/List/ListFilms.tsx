import React from "react";
import './ListFilms.css'
import { CardFilm } from "../CardFilm/CardFilm"; 

function ListFilms () {
    return (
        <div className="grid_wrapper">
            <CardFilm/>
            <CardFilm/>
            <CardFilm/>
            <CardFilm/>
            <CardFilm/>
            <CardFilm/>
        </div>
    )
}

export {ListFilms}