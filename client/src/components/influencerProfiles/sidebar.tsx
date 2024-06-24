import { Link } from "react-router-dom";
import React from 'react';
import { IoPersonOutline } from "react-icons/io5";
import { BiMessage } from "react-icons/bi";
import { MdOutlineCampaign } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { SidebarContainer } from "../../assets/styledComponents/sidebar";
import { AiOutlineLogout } from "react-icons/ai";


export const Sidebar: React.FC = () => {
    return (
        <SidebarContainer>
            <Link to="/influencer" className="active">
                <IoPersonOutline size={30} />
                <span>Profile</span>
            </Link>
            <Link to="messages">
                <BiMessage size={30} />
                <span>Messages</span>
            </Link>
            <Link to="/campaigns">
                <MdOutlineCampaign size={30} />
                <span>Campaign</span>
            </Link>
            <Link to="/settings">
                <IoSettingsOutline size={30} />
                <span>Settings</span>
            </Link>
            <Link to="/notifications">
                <IoNotificationsOutline size={30} />
                <span>Notifications</span>
            </Link>
            <Link to={'/logout'} className="logout">
                <AiOutlineLogout size={30}/>
                <span>Logout</span>
            </Link>
        </SidebarContainer>
    );
};