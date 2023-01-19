import React from "react";
import { Provider } from "react-redux";
import { MainComponent } from "./Components/MainComponent";
import { storePages } from "./redax";

function App() {
  return (
    <Provider store={storePages}>
      <MainComponent />
    </Provider>
  );
}

export default App;
