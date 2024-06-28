import { Route, Routes } from "react-router-dom";
import { InfluencerProfile } from "../pages/influencerProfile";
import { Sidebar } from "../components/influencerProfiles/sidebar";
import { Header } from "../components/headers/Header";
import { RouteContainer } from "../assets/styledComponents/InfluencerRoute";
import { Message } from "../pages/message";
import CampaignList from "../pages/campaign";
import { Notification } from "../pages/notification";
import { Influencers } from "../pages/influencers";
import { BrandProfile } from "../pages/brandProfile";


export const InfluencerRoutes = () => {

  return (
    <RouteContainer>
      <div className="route">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<BrandProfile />} />
          <Route path="messages" element={<Message/>}/>
          <Route path="campaigns" element={<CampaignList/>} />
          <Route path="notifications" element={<Notification/>}/>
          <Route path="influencers" element={<Influencers />} />
        </Routes>
      </div>
    </RouteContainer>
  );
};
