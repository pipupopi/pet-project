import React, { Children } from "react";
import { MainComponent } from "./Components/MainComponent";
import { storePages } from "./redax";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErorPage } from "./Components/eror-page/eror-page";
import { Authorization } from "./Components/authorization/authorization";
import { DetailsFilm } from "./Components/details-film/details-film";
import { Search } from "./Components/search/search";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={storePages}>
        <MainComponent />
      </Provider>
    ),
    children: [
      {
        path: "/authorization",
        element: <Authorization />,
      },
      {
        path: '/details',
        element: <DetailsFilm/>
      },
      {
        path: '/search',
        element: <Search/>
      }
    ],
    errorElement: <ErorPage />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export { App };
