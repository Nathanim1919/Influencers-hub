import CampaignCard from "../components/cards/campaignCard";
import { CampaignListContainer } from "../assets/styledComponents/campaignListStyle";
import { SavedCampaign } from "../components/savedCampaign";
import { CampaignDetail } from "./campaignDetail";
import { useEffect, useState } from "react";
import { Campaign } from "../interfaces/campaignInterface";
import { requestHandler } from "../utils";
import { campaignApi } from "../api";

const CampaignList: React.FC = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>();
  const [loading, setLoading] = useState(false);
  const [allCampaigns, setAllCampaigns] = useState<Campaign[] | null>();

  const getAllCampaigns = async () => {
    await requestHandler(
      async () => campaignApi.getCampaigns(),
      setLoading,
      (data: Campaign[]) => {
        setAllCampaigns(data);
        console.log(data);
      },
      alert
    );
  };

  useEffect(() => {
    getAllCampaigns();
  }, []);

  return (
    <CampaignListContainer>
      {!selectedCampaign &&
        <div className="lists">
          <div className="header">
            <h1>Campaigns</h1>
            <p>
              Apply to the campaigns below to start collaborating with brands.
            </p>
          </div>
          <div className="campaignLists">
            {allCampaigns?.map((campaign, index) => (
              <CampaignCard
                key={index}
                campaign={campaign}
                setSelectedCampaign={setSelectedCampaign}
              />
            ))}
          </div>
        </div>
      }
     {selectedCampaign && <CampaignDetail setSelectedCampaign={setSelectedCampaign} campaign={selectedCampaign}/>}
      <SavedCampaign />
    </CampaignListContainer>
  );
};

export default CampaignList;
