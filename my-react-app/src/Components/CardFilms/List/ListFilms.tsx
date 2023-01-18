import React from "react";
import './ListFilms.css'
import { CardFilm } from "../CardFilm/CardFilm"; 
import { listFilms } from "../../../listFilms";

function ListFilms () {
    return (
        <div className="grid_wrapper">
            {listFilms.map(item => (
                <CardFilm vote={item.vote_average} title={item.title} key={item.id}/>))}</div>
    )
}

export {ListFilms}