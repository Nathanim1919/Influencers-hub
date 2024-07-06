import React from "react";
import { CampaignCardContainer } from "../../assets/styledComponents/cardsStyle/campaignCard";
import CampaignImage from "../../assets/influencerProfileImages/a.jpeg";
import { IoSaveOutline } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import { GrSend } from "react-icons/gr";
import { Campaign } from "../../interfaces/campaignInterface";
import { influencerApi } from "../../api";
import { requestHandler } from "../../utils";

interface CampaignCardProps {
  campaign: Campaign;
  saved?: boolean;
  applied?: boolean;
  setSelectedCampaign?: (campaign: Campaign) => void;
  setSavedCampaigns?: (campaignIds: Campaign[]) => void;
  setAppliedCampaigns?: (campaignIds: Campaign[]) => void;
  setapplyToCampaign?: (campaign: Campaign) => void;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  campaign,
  setSelectedCampaign,
  saved,
  applied,
  setSavedCampaigns,
  setapplyToCampaign,
}) => {
  const [loading, setLoading] = React.useState(false);

  const saveCampaign = async (campaign: Campaign, campaignId: string) => {
    await requestHandler(
      async () => influencerApi.saveCampaign({ campaignId }),
      setLoading,
      (data) => {
        if (setSavedCampaigns) {
          setSavedCampaigns((prev) => {
            if (prev) {
              return [...prev, campaign];
            } else {
              return [campaign];
            }
          });
        }
      },
      alert
    );
  };

  return (
    <CampaignCardContainer>
      <div className="campaignInfo">
        <div className="campaignImage">
          <img src={CampaignImage} alt="campaign" />
        </div>
      </div>
      <div className="Brandinfo">
        <div className="brandLogo">
          <img src="" alt="" />
        </div>
        <div>
          <h3 className="brand">{campaign.brandId.brandName}</h3>
          <div className="date">
            <p>{/* {campaign.timeline?.endDate} */}</p>
          </div>
          <p className="budget">
            ${campaign.budget}<span>{campaign.status}</span>
          </p>
        </div>
      </div>
      <div className="diescription">
        <h3 className="text-lg font-bold">{(campaign.title)?.slice(0, 30)}..</h3>
        <p className="description">{campaign.description}</p>
      </div>
      <div className="btns">
        <button
          onClick={() => {
            if (setSelectedCampaign) {
              setSelectedCampaign(campaign);
            } else {
              console.log("setSelectedCampaign is not provided.");
            }
          }}
          className="viewDetail"
        >
          <TbListDetails />
          Details
        </button>
        <button
          onClick={() => setapplyToCampaign && setapplyToCampaign(campaign)}
          className={applied ? "apply applied" : "apply"}
        >
          <GrSend />
          {!applied ? "Apply" : "Applied"}
        </button>
        <button
          onClick={() => saveCampaign(campaign, campaign?._id)}
          className={saved ? "saveForPreview saved" : "saveForPreview"}
        >
          <IoSaveOutline />
          {!saved ? "Save" : "Saved"}
        </button>
      </div>
    </CampaignCardContainer>
  );
};

export default CampaignCard;
