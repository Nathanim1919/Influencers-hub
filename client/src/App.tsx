import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import RegistrationForm from "./pages/register";
import { Home } from "./pages/Home";
import { InfluencerRoutes } from "./routes/Influencer";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/influencer" element={<InfluencerRoutes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes> 
    </>
  );
}

export default App;
