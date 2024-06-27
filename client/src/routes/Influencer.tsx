import { Route, Routes } from "react-router-dom";
import { InfluencerProfile } from "../pages/influencerProfile";
import { Sidebar } from "../components/influencerProfiles/sidebar";
import { Header } from "../components/headers/Header";
import { RouteContainer } from "../assets/styledComponents/InfluencerRoute";
import { Message } from "../pages/message";
import CampaignList from "../pages/campaign";
import { Notification } from "../pages/notification";


export const InfluencerRoutes = () => {

  return (
    <RouteContainer>
      <Header />
      <div className="route">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<InfluencerProfile />} />
          <Route path="messages" element={<Message/>}/>
          <Route path="campaigns" element={<CampaignList/>} />
          <Route path="notifications" element={<Notification/>}/>
        </Routes>
      </div>
    </RouteContainer>
  );
};
