import { Link } from "react-router-dom";
import React from 'react';
import { IoPersonOutline } from "react-icons/io5";
import { BiMessage } from "react-icons/bi";
import { MdOutlineCampaign } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

export interface SidebarProps {
    setIsHovered: (value: boolean) => void;
    isHovered: boolean;
}


export const Sidebar: React.FC<SidebarProps> = ({ setIsHovered, isHovered }) => {
    return (
        <aside onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} className="sidebar bg-white h-screen flex flex-col align-end gap-5 px-1">
            <Link className="flex items-center gap-3 w-full hover:bg-blue-500 hover:text-white" to={'/profile'}>
                <IoPersonOutline className="text-3xl w-10 p-2 h-10 rounded-full"/>
               {isHovered && <span className="text-4">Profile</span>}
            </Link>
            <Link className="flex items-center gap-3 hover:bg-blue-500 hover:text-white" to={"/messages"}>
                <BiMessage className="text-3xl w-10 p-2 h-10 rounded-full"/>
                {isHovered && <span className="text-4">Messages</span>}
            </Link>
            <Link className="flex items-center gap-3 hover:bg-blue-500 hover:text-white" to={'/campagns'}>
                <MdOutlineCampaign className="text-3xl w-10 p-2 h-10 rounded-full"/>
               {isHovered && <span className="text-4">Campagns</span>}
            </Link>
            <Link className="flex items-center gap-3 hover:bg-blue-500 hover:text-white" to={'/setting'}>
                <IoSettingsOutline className="text-3xl  w-10 p-2 h-10 rounded-full"/>
               {isHovered && <span className="text-4">Settings</span>}
            </Link>
            <Link className="flex items-center gap-3 hover:bg-blue-500 hover:text-white" to={'/notifcations'}>
                <IoNotificationsOutline className="text-3xl w-10 p-2 h-10 rounded-full"/>
               {isHovered && <span className="">Notifications</span>}
            </Link>
        </aside>
    );
};