import React from "react";
import { CampaignDetailContainer } from "../assets/styledComponents/campaignDetailStyle";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Campaign } from "../interfaces/campaignInterface";

interface CampaignDetailProps {
  setSelectedCampaign?: (campaign: Campaign | null) => void;
  editCampaign?: boolean;
  campaign?: Campaign;
}

export const CampaignDetail: React.FC<CampaignDetailProps> = ({
  setSelectedCampaign,
  editCampaign,
  campaign,
}) => {
  return (
    <CampaignDetailContainer>
      <div className="header">
        {
          <IoMdArrowRoundBack
            onClick={() => setSelectedCampaign && setSelectedCampaign(null)}
            style={{
              cursor: "pointer",
              padding: ".25rem",
              backgroundColor: "#dfd8d8",
              fontSize: "1.7rem",
              borderRadius: "50%",
            }}
          />
        }
        <h1>{campaign?.title}</h1>
        <p>{campaign?.brandId.brandName}</p>
      </div>
      <div className="moreInfo">
        <div className="date">
          <p>
            <strong>Started on: </strong>{" "}
            {campaign?.timeline?.startDate?.toLocaleDateString()}
          </p>
          <p>
            <strong>Until: </strong>{" "}
            {campaign?.timeline?.endDate?.toLocaleDateString()}
          </p>
        </div>
        <div className="editCampaign">
          {editCampaign && <button>Edit Campaign</button>}
          <p>{campaign?.budget} ETB</p>
        </div>
      </div>
      <div className="description">
        <h2>Description</h2>
        <p>{campaign?.description}</p>
      </div>

      <div className="description">
        <h2>Objective</h2>
        <p>{campaign?.objectives}</p>
      </div>
      <div className="btns">
        <button className="apply">Apply</button>
        <button className="saveForPreview">Save</button>
      </div>
    </CampaignDetailContainer>
  );
};
