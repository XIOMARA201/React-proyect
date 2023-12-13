import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from './Routes/Menu';
import { Home } from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Tasks from './Pages/Tasks';


export default function App() {

  return (
    <>
<BrowserRouter>
<Menu /> 
<div>
<Routes>
<Route
          path="/"
          element={<Home />} />
          <Route
          path="AboutUs"
          element={<AboutUs />} />
<Route
          path="Tasks"
          element={<Tasks />} />
      </Routes>
  </div>
  </BrowserRouter>
  </>
  )
}

