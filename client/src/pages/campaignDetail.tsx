import React from 'react';
import {CampaignDetailContainer} from '../assets/styledComponents/campaignDetailStyle';
import { IoMdArrowRoundBack } from "react-icons/io";

interface CampaignDetailProps {
    setSelectedCampaign?: (campaign: any) => void;
    editCampaign?: boolean;
}

export const CampaignDetail: React.FC<CampaignDetailProps> = ({setSelectedCampaign, editCampaign}) => {
    return (
        <CampaignDetailContainer>
            <div className="header">
                {<IoMdArrowRoundBack onClick={()=>setSelectedCampaign(null)} style={{
                    cursor: "pointer",
                    padding: ".25rem",
                    backgroundColor: "#dfd8d8",
                    fontSize: "1.7rem",
                    borderRadius: "50%",
                }} />}
                <h1>Summer Vibes Collection</h1>
                <p>BeachWear Co.</p>
            </div>
            <div className="moreInfo">
                <div className="date">
                    <p>
                        <strong>Started on: </strong> July 1, 2024
                    </p>
                    <p>
                        <strong>Until: </strong> July 31, 2024
                    </p>
                </div>
                <div className="editCampaign">
                  {editCampaign &&  <button>Edit Campaign</button>}
                    <p>50000 ETB</p>
                </div>
            </div>
            <div className="description">
                <h2>Description</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, libero sed ultricies
                    consectetur, metus purus ultricies nunc, ac tincidunt metus libero nec ex. Nulla facilisi. Sed
                    ultricies, turpis vel tincidunt ultricies, justo libero aliquam libero, sit amet bibendum nunc
                    libero vel arcu. Donec non nisl sit amet nunc luctus ultricies. In hac habitasse platea dictumst.
                    Nulla facilisi. Donec auctor, libero sit amet ultricies ultricies, libero libero ultricies libero,
                    sit amet ultricies libero libero.
                </p>
            </div>
            <div className="description">
                <h2>Description</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, libero sed ultricies
                    consectetur, metus purus ultricies nunc, ac tincidunt metus libero nec ex. Nulla facilisi. Sed
                    ultricies, turpis vel tincidunt ultricies, justo libero aliquam libero, sit amet bibendum nunc
                    libero vel arcu. Donec non nisl sit amet nunc luctus ultricies. In hac habitasse platea dictumst.
                    Nulla facilisi. Donec auctor, libero sit amet ultricies ultricies, libero libero ultricies libero,
                    sit amet ultricies libero libero.
                </p>
            </div>
            <div className="description">
                <h2>Description</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, libero sed ultricies
                    consectetur, metus purus ultricies nunc, ac tincidunt metus libero nec ex. Nulla facilisi. Sed
                    ultricies, turpis vel tincidunt ultricies, justo libero aliquam libero, sit amet bibendum nunc
                    libero vel arcu. Donec non nisl sit amet nunc luctus ultricies. In hac habitasse platea dictumst.
                    Nulla facilisi. Donec auctor, libero sit amet ultricies ultricies, libero libero ultricies libero,
                    sit amet ultricies libero libero.
                </p>
            </div>
            <div className="description">
                <h2>Description</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, libero sed ultricies
                    consectetur, metus purus ultricies nunc, ac tincidunt metus libero nec ex. Nulla facilisi. Sed
                    ultricies, turpis vel tincidunt ultricies, justo libero aliquam libero, sit amet bibendum nunc
                    libero vel arcu. Donec non nisl sit amet nunc luctus ultricies. In hac habitasse platea dictumst.
                    Nulla facilisi. Donec auctor, libero sit amet ultricies ultricies, libero libero ultricies libero,
                    sit amet ultricies libero libero.
                </p>
            </div>
            <div className="description">
                <h2>Description</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, libero sed ultricies
                    consectetur, metus purus ultricies nunc, ac tincidunt metus libero nec ex. Nulla facilisi. Sed
                    ultricies, turpis vel tincidunt ultricies, justo libero aliquam libero, sit amet bibendum nunc
                    libero vel arcu. Donec non nisl sit amet nunc luctus ultricies. In hac habitasse platea dictumst.
                    Nulla facilisi. Donec auctor, libero sit amet ultricies ultricies, libero libero ultricies libero,
                    sit amet ultricies libero libero.
                </p>
            </div>
            <div className="requirements">
                <h2>Requirements</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, libero sed ultricies
                    consectetur, metus purus ultricies nunc, ac tincidunt metus libero nec ex. Nulla facilisi. Sed
                    ultricies, turpis vel tincidunt ultricies, justo libero aliquam libero, sit amet bibendum nunc
                    libero vel arcu. Donec non nisl sit amet nunc luctus ultricies. In hac habitasse platea dictumst.
                    Nulla facilisi. Donec auctor, libero sit amet ultricies ultricies, libero libero ultricies libero,
                    sit amet ultricies libero libero.
                </p>

            </div>
            <div className="requirements">
                <h2>Requirements</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, libero sed ultricies
                    consectetur, metus purus ultricies nunc, ac tincidunt metus libero nec ex. Nulla facilisi. Sed
                    ultricies, turpis vel tincidunt ultricies, justo libero aliquam libero, sit amet bibendum nunc
                    libero vel arcu. Donec non nisl sit amet nunc luctus ultricies. In hac habitasse platea dictumst.
                    Nulla facilisi. Donec auctor, libero sit amet ultricies ultricies, libero libero ultricies libero,
                    sit amet ultricies libero libero.
                </p>
                
            </div>
            <div className="requirements">
                <h2>Requirements</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, libero sed ultricies
                    consectetur, metus purus ultricies nunc, ac tincidunt metus libero nec ex. Nulla facilisi. Sed
                    ultricies, turpis vel tincidunt ultricies, justo libero aliquam libero, sit amet bibendum nunc
                    libero vel arcu. Donec non nisl sit amet nunc luctus ultricies. In hac habitasse platea dictumst.
                    Nulla facilisi. Donec auctor, libero sit amet ultricies ultricies, libero libero ultricies libero,
                    sit amet ultricies libero libero.
                </p>
                
            </div>
            <div className="requirements">
                <h2>Requirements</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, libero sed ultricies
                    consectetur, metus purus ultricies nunc, ac tincidunt metus libero nec ex. Nulla facilisi. Sed
                    ultricies, turpis vel tincidunt ultricies, justo libero aliquam libero, sit amet bibendum nunc
                    libero vel arcu. Donec non nisl sit amet nunc luctus ultricies. In hac habitasse platea dictumst.
                    Nulla facilisi. Donec auctor, libero sit amet ultricies ultricies, libero libero ultricies libero,
                    sit amet ultricies libero libero.
                </p>
                
            </div>
            <div className="btns">
                <button className="apply">Apply</button>
                <button className="saveForPreview">Save</button>
            </div>
        </CampaignDetailContainer>
    );
};