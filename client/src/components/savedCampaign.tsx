import React from "react";
import MyImage from "../assets/influencerProfileImages/a.jpeg";
import { SavedCampaignContainer } from "../assets/styledComponents/savedCampaignStyle";
import { GrFormNextLink } from "react-icons/gr";
import { Campaign } from "../interfaces/campaignInterface";
import { CiBoxList } from "react-icons/ci";
import { IoSaveOutline } from "react-icons/io5";
import { BsSendCheck } from "react-icons/bs";

interface SavedCampaignProps {
  savedCampaigns: Campaign[] | null;
  appliedCampaigns: Campaign[] | null;
  setSelectedCampaign?: (campaign: Campaign) => void;
  selectedCampaign: Campaign | null;
}
export const SavedCampaign: React.FC<SavedCampaignProps> = ({
  savedCampaigns,
  appliedCampaigns,
  setSelectedCampaign,
  selectedCampaign
}) => {
  const [displaySaved, setDisplaySaved] = React.useState(false);
  const [displayOptions, setDisplayOptions] = React.useState(false);

  const handleDisplay = (display: string) => {
    if (display === "saved") {
      setDisplaySaved(true);
      console.log(displaySaved);
    } else {
      setDisplaySaved(false);
      console.log(displaySaved);
    }
  };
  return (
    <SavedCampaignContainer>
      <div className="header">
        <div className="div">
          <h1>My Campaigns</h1>
          <p>Your saved Campaigns</p>
        </div>
        <div className="list">
          <CiBoxList onClick={()=>setDisplayOptions(true)}/>
          {displayOptions && <div className="options">
            <li onClick={() => {handleDisplay("saved"); setDisplayOptions(false)}}>
              <IoSaveOutline />
              Saved
            </li>
            <li onClick={() => {handleDisplay("applied"); setDisplayOptions(false)}}>
              <BsSendCheck />
              Applied
            </li>
          </div>}
        </div>
      </div>
      <div className="campaignLists">
        {(displaySaved ? savedCampaigns : appliedCampaigns)
          ?.slice()
          .reverse()
          .map((campaign: Campaign) => (
            <div className={selectedCampaign?._id === campaign._id?"campaign active":"campaign"} onClick={() => setSelectedCampaign(campaign)}>
              <div className="imag">
                <img src={MyImage} alt="campaign" />
              </div>
              <div className="campaignInfo">
                <h2>{campaign.title?.slice(0, 10)}</h2>
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
