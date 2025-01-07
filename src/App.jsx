import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Component/Layout/AppLayout';
import Contact from './Pages/Contact'
import About from './Pages/About'
import Product from './Pages/Product'
import Home from './Pages/Home'
import Error from './Pages/Error';

const App = () => {
  const router= createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      errorElement:<Error/>,
      children: [
        {
          path: "/", 
          element: <Home />, 
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact-us",
          element: <Contact />,
        },
        {
          path: "/products",
          element: <Product />,
        },
      ],
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
    
    
  
}

export default App