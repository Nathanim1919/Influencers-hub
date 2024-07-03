import React from "react";
import { CampaignCardContainer } from "../../assets/styledComponents/cardsStyle/campaignCard";
import CampaignImage from '../../assets/influencerProfileImages/a.jpeg'
import { IoSaveOutline } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import { GrSend } from "react-icons/gr";
import { Campaign } from "../../interfaces/campaignInterface";



interface CampaignCardProps {
  campaign: Campaign;
  setSelectedCampaign?: (campaign: Campaign) => void;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  campaign,
  setSelectedCampaign
}) => {
  return (
    <CampaignCardContainer>
      <div className="campaignInfo">
        <div className="campaignImage">
          <img src={CampaignImage} alt="campaign" />
        </div>
        <div className="info">
          <h3 className="brand">{campaign.brandId.brandName}</h3>
          <div className="date">
            <p>
             {/* {campaign.timeline?.endDate} */}
            </p>
          </div>
          <p className="budget">
            <strong>Budget:</strong> ${campaign.budget}
          </p>
        </div>
      </div>
      <div className="diescription">
      <h3 className="text-lg font-bold">{campaign.title}</h3>
      <p className="description">{campaign.description}</p>
      </div>
      <div className="btns">
      <button onClick={() => {
  console.log("Attempting to set selected campaign with:", campaign);
  if (setSelectedCampaign) {
    setSelectedCampaign(campaign);
  } else {
    console.log("setSelectedCampaign is not provided.");
  }
}} className="viewDetail"><TbListDetails/>Details</button>
        <button className="apply"><GrSend/>Apply</button>
        <button className="saveForPreview"><IoSaveOutline/>Save</button>
      </div>
    </CampaignCardContainer>
  );
};

export default CampaignCard;
