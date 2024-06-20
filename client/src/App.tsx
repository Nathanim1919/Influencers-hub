import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import RegistrationForm from "./pages/register";

function App() {

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes> 
    </>
  );
}

export default App;
