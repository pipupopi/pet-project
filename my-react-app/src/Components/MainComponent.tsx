import { Header } from "./Header/Header";
import { FilterBlock } from "./FilterBlock/FilterBlock";
import { ListFilms } from "./CardFilms/List/ListFilms";
import './MainComponent.css'
import React from "react";

function MainComponent() {
  return (
    <div className="App">
      <Header />
      <div className="used_space">
        <FilterBlock />
        <div>
          <ListFilms />
        </div>
      </div>
    </div>
  );
}

export { MainComponent };
