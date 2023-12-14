import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from './Routes/Menu';
import { Home } from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Tasks from './Pages/Task';
import { IconButton, useColorMode, Center } from '@chakra-ui/react';
import { FaMoon, FaSun } from "react-icons/fa";


export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
    <Center mt="10px">
     <IconButton
     as={ isDark ? FaSun : FaMoon } 
     boxSize={4} 
     size={"1px"}
     isRound={true}
     onClick={ toggleColorMode }
     ></IconButton>
     </Center>
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

