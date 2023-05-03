import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleRecipe from './Components/SingleRecipe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/singlerecipe",
    element: <SingleRecipe/>,
  },
  {
    path: "/singlerecipe/:id",
    element: <SingleRecipe/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />
  
);
