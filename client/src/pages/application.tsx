import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Campaign } from "../interfaces/campaignInterface";

// import MyImage from "../assets/images/campaign.jpg";
import { ApplicationContainer } from "../assets/styledComponents/applicationStyle";
import { requestHandler } from "../utils";
import { influencerApi } from "../api";

interface ApplicationModalProps {
  campaign: Campaign;
  closeModal: () => void;
  setAppliedCampaigns: (campaign: Campaign[]) => void;
  setSelectedCampaign: (campaign: Campaign) => void;
}

export const Application: React.FC<ApplicationModalProps> = ({
  campaign,
  closeModal,
  setAppliedCampaigns,
  setSelectedCampaign,
}) => {
  const [loading, setLoading] = useState(false);
  const [proposal, setProposal] = useState("");
  setSelectedCampaign(campaign);

  // functions for applying to a campaign
  const applyToCampaign = async (campaign: Campaign, campaignId: string) => {
    console.log("Attempting to apply to campaign with id:", campaignId);
    await requestHandler(
      async () => influencerApi.applyToCampaign(campaignId, proposal),
      setLoading,
      (data) => {
        if (setAppliedCampaigns) {
          setAppliedCampaigns((prev) => {
            if (prev) {
              return [...prev, campaign];
            } else {
              return [campaign];
            }
          });
        }
        console.log("Campaign applied successfully", data);
      },
      alert
    );
  };

  return (
    <ApplicationContainer>
      <div className="modal">
        <div className="header">
          <div className="div">
            <h1>Application</h1>
            <p>Apply for this campaign</p>
          </div>
          <div className="close" onClick={closeModal}>
            <IoClose />
          </div>
        </div>
        <div className="campaign">
          <div className="imag">
            {/* <img src={MyImage} alt="campaign" /> */}
          </div>
          <div className="campaignInfo">
            <h2>{campaign.title}</h2>
            <p>{campaign.brandId.brandName}</p>
          </div>
        </div>
        <div className="form">
          <form>
            <div className="input">
              <label htmlFor="message">Message</label>
              <textarea
                onChange={(e) => setProposal(e.target.value)}
                id="message"
                placeholder="Enter Cover Letter."
              ></textarea>
            </div>
            <button
              onClick={(e) => {
                {
                  e.preventDefault();
                  applyToCampaign(campaign, campaign?._id);
                }
              }}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </ApplicationContainer>
  );
};
