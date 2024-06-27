import { Link } from "react-router-dom";
import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { BiMessage } from "react-icons/bi";
import { MdOutlineCampaign } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { SidebarContainer } from "../../assets/styledComponents/sidebar";
import { AiOutlineLogout } from "react-icons/ai";
import LogoImage from "../../assets/heroImages/handshake.png";
import ProfileImage from '../../assets/influencerProfileImages/a.jpeg'

export const Sidebar: React.FC = () => {
  return (
    <SidebarContainer className="sidebar">
      <div className="logo">
        <img src={LogoImage} alt="logo" />
      </div>
      <div className="upperLinks">
        <Link to="/influencer" className="active">
          <IoPersonOutline size={30} />
          <span>Profile</span>
        </Link>
        <Link to="messages">
          <BiMessage size={30} />
          <span>Messages</span>
        </Link>
        <Link to="campaigns">
          <MdOutlineCampaign size={30} />
          <span>Campaign</span>
        </Link>
        <Link to="influencers">
          <MdOutlineCampaign size={30} />
          <span>Influencers</span>
        </Link>
        <Link to="settings">
          <IoSettingsOutline size={30} />
          <span>Settings</span>
        </Link>
        <Link to="notifications">
          <IoNotificationsOutline size={30} />
          <span>Notifications</span>
        </Link>
      </div>

      <div className="downlikns">
        <Link to={"/logout"} className="logout">
          <AiOutlineLogout size={30} />
          <span>Logout</span>
        </Link>
        <Link to={"/profile"}>
          <div className="profilePic">
            <img src={ProfileImage}alt="profile" />
          </div>
          <span>Nathanim T.</span>
        </Link>
      </div>
    </SidebarContainer>
  );
};
