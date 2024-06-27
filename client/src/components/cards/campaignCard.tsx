import React from "react";
import { CampaignCardContainer } from "../../assets/styledComponents/cardsStyle/campaignCard";
import CampaignImage from '../../assets/influencerProfileImages/a.jpeg'

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
  startDate,
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
          <p className="brand">{brand}</p>
          <div className="date">
            <p>
              <strong>Start:</strong> {startDate}
            </p>
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
        <button className="viewDetail">Details</button>
        <button className="apply">Apply</button>
        <button className="saveForPreview">Save</button>
      </div>
    </CampaignCardContainer>
  );
};

export default CampaignCard;
