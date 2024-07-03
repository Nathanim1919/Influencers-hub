import React from "react";
import MyImage from "../assets/influencerProfileImages/a.jpeg";
import { SavedCampaignContainer } from "../assets/styledComponents/savedCampaignStyle";
import { GrFormNextLink } from "react-icons/gr";
import { Campaign } from "../interfaces/campaignInterface";


interface SavedCampaignProps {
  savedCampaigns: Campaign[] | null;
}
export const SavedCampaign: React.FC<SavedCampaignProps> = ({
  savedCampaigns,
}) => {


  return (
    <SavedCampaignContainer>
      <div className="header">
        <h1>My Campaigns</h1>
        <p>Your saved Campaigns</p>
      </div>
      <div className="campaignLists">
        {savedCampaigns && savedCampaigns?.reverse().map((campaign: Campaign) => (
          <div className="campaign">
            <div className="imag">
              <img src={MyImage} alt="campaign" />
            </div>
            <div className="campaignInfo">
              <h2>{(campaign.title)?.slice(0, 10)}</h2>
              <p>{campaign.brandId.brandName}</p>
            </div>
            <div className="next">
              <GrFormNextLink />
            </div>
          </div>
        ))}
      </div>
    </SavedCampaignContainer>
  );
};
