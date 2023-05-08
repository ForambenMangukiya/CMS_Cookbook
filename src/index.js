import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleRecipe from './Components/SingleRecipe';
import CategoryPage from './Components/CategoryPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/contact",
  //   element: <SingleRecipe/>,
  // },
  {
    path: "/singlerecipe/:recipeId",
    element: <SingleRecipe/>,
  },
  {
    path: "/categories",
    element: <CategoryPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />
  
);
