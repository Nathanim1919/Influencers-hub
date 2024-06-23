import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { InfluencerProfile } from "../pages/influencerProfile";
import { Sidebar } from "../components/influencerProfiles/sidebar";
import { Header } from "../components/headers/Header";


export const InfluencerRoutes = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Header />
      <div
        className="grid w-full h-screen overflow-hidden"
        style={{ gridTemplateColumns: isHovered ? "13% 87%" : "6% 96%", transition: "all 0.5s"}}
      >
        <Sidebar setIsHovered={setIsHovered} isHovered={isHovered}/>
        <Routes>
          <Route path="/" element={<InfluencerProfile />} />
        </Routes>
      </div>
    </>
  );
};
