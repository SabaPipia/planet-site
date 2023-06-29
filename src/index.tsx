import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Main from "./pages/main";
import Planet from "./pages/planet";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/earth" />} />
      <Route path="/" element={<Main />}>
        <Route path="/:planet" element={<Planet />} />
      </Route>
    </>
  )
);

root.render(<RouterProvider router={router} />);
