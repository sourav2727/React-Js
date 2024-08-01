import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Components/Home.jsx";
import { Services } from "./Components/Services.jsx";
import { Book } from "./Components/Book.jsx";
import { VisitMore } from "./Components/VisitMore.jsx";
import { User } from "./Components/User.jsx";

const router = createBrowserRouter([

  {
    path:"",
    element:<App/>,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/book",
        element: <Book />,
      },
      {
        path: "/visitmore",
        element: <VisitMore />,
      },
      {
        path:"/user/:username",
        element:<User/>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);
