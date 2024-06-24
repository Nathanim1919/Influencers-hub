import { Route, Routes } from "react-router-dom";
import { InfluencerProfile } from "../pages/influencerProfile";
import { Sidebar } from "../components/influencerProfiles/sidebar";
import { Header } from "../components/headers/Header";
import { RouteContainer } from "../assets/styledComponents/InfluencerRoute";
import { Message } from "../pages/message";


export const InfluencerRoutes = () => {

  return (
    <RouteContainer>
      <Header />
      <div className="route">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<InfluencerProfile />} />
          <Route path="messages" element={<Message/>}/>
        </Routes>
      </div>
    </RouteContainer>
  );
};
