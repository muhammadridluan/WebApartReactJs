import './App.css';
import { Route, Routes } from "react-router-dom";

import { LandingLayout, Layout } from "./components";
import { About, Home, Login, Register, ListUnit } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/*" element={<LandingLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="listunit" element={<ListUnit />} />            
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
