import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './Pages/About';


const router = createBrowserRouter([
  {
    path: "/", element: <div>
      <Header />
      <Home />
      <Footer />
    </div>
  },
  {
    path: "/about", element: <div>
      <Header />
      <About />
      <Footer />
    </div>
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;