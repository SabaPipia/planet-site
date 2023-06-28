import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import App from "./App";
import Main from "./pages/main";
import Header from "./components/header";
import Planet from "./pages/planet";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="/:planet" element={<Planet />} />
    </Route>
  )
);

root.render(<RouterProvider router={router} />);
