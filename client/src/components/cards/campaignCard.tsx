import React from "react";
import { CampaignCardContainer } from "../../assets/styledComponents/cardsStyle/campaignCard";
import CampaignImage from '../../assets/influencerProfileImages/a.jpeg'
import { IoSaveOutline } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import { GrSend } from "react-icons/gr";



interface CampaignCardProps {
  title: string;
  brand: string;
  description: string;
  startDate: string;
  endDate: string;
  budget: number;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  title,
  brand,
  description,
  endDate,
  budget,
}) => {
  return (
    <CampaignCardContainer>
      <div className="campaignInfo">
        <div className="campaignImage">
          <img src={CampaignImage} alt="campaign" />
        </div>
        <div className="info">
          <h3 className="brand">{brand}</h3>
          <div className="date">
            <p>
              <strong>End:</strong> {endDate}
            </p>
          </div>
          <p className="budget">
            <strong>Budget:</strong> ${budget}
          </p>
        </div>
      </div>
      <div className="diescription">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="description">{description}</p>
      </div>
      <div className="btns">
        <button className="viewDetail"><TbListDetails/>Details</button>
        <button className="apply"><GrSend/>Apply</button>
        <button className="saveForPreview"><IoSaveOutline/>Save</button>
      </div>
    </CampaignCardContainer>
  );
};

export default CampaignCard;
