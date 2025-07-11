import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Body from "./components/Body.jsx";
import SeriesBody from "./components/SeriesBody.jsx";
import GamesBody from "./components/GamesBody.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/movies", element: <Body /> },
      { path: "/series", element: <SeriesBody /> },
      {path:"/games",element:<GamesBody/>},
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
