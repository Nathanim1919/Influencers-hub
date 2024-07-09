import CampaignCard from "../components/cards/campaignCard";
import { CampaignListContainer } from "../assets/styledComponents/campaignListStyle";
import { SavedCampaign } from "../components/savedCampaign";
import { CampaignDetail } from "./campaignDetail";
import { useEffect, useState } from "react";
import { Campaign } from "../interfaces/campaignInterface";
import { requestHandler } from "../utils";
import { campaignApi, influencerApi } from "../api";
import { Application } from "./application";

const CampaignList: React.FC = () => {

  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  const [applyToCampaign, setapplyToCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState(false);
  const [allCampaigns, setAllCampaigns] = useState<Campaign[] | null>(null
  );
  const [savedCampaigns, setSavedCampaigns] = useState<Campaign[] | null>(null
  );
  const [appliedCampaigns, setAppliedCampaigns] = useState<Campaign[] | null>(null
  );

  const getAllCampaigns = async () => {
    await requestHandler(
      async () => campaignApi.getCampaigns(),
      setLoading,
      (data: Campaign[]) => {
        setAllCampaigns(data);
      },
      alert
    );
  };

  const getAppliedCampaigns = async () => {
    await requestHandler(
      async () => influencerApi.getAppliedCampaigns(),
      setLoading,
      (data: Campaign[]) => {
        setAppliedCampaigns(data);
      },
      alert
    );
  };

  const getSavedCampaigns = async () => {
    await requestHandler(
      async () => influencerApi.getSavedCampaigns(),
      setLoading,
      (data: Campaign[]) => {
        setSavedCampaigns(data);
      },
      alert
    );
  };

  useEffect(() => {
    if (!allCampaigns) getAllCampaigns();
    if (!savedCampaigns) getSavedCampaigns();
    if (!appliedCampaigns) getAppliedCampaigns();
  }, []);

  return (
    <CampaignListContainer
      isSidebar={
        (savedCampaigns?.length ?? 0) > 0 || (appliedCampaigns?.length ?? 0) > 0
      }
    >
      {!selectedCampaign && (
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
                saved={savedCampaigns?.some((c) => c._id === campaign._id)}
                applied={appliedCampaigns?.some((c) => c._id === campaign._id)}
                campaign={campaign}
                setSelectedCampaign={setSelectedCampaign}
                setSavedCampaigns={setSavedCampaigns}
                setAppliedCampaigns={setAppliedCampaigns}
                setapplyToCampaign={setapplyToCampaign}
              />
            ))}
          </div>
        </div>
      )}
      {selectedCampaign && (
        <CampaignDetail
          setSelectedCampaign={setSelectedCampaign}
          setapplyToCampaign={setapplyToCampaign}
          campaign={selectedCampaign}
        />
      )}
      {applyToCampaign && (
        <Application
          setSelectedCampaign={setSelectedCampaign}
          setAppliedCampaigns={setAppliedCampaigns}
          campaign={applyToCampaign}
          closeModal={() => setapplyToCampaign(null)}
        />
      )}
      {((appliedCampaigns?.length?? 0 > 0) || (savedCampaigns?.length?? 0 > 0)) && (
        <SavedCampaign
          selectedCampaign={selectedCampaign}
          setSelectedCampaign={setSelectedCampaign}
          savedCampaigns={savedCampaigns}
          appliedCampaigns={appliedCampaigns}
        />
      )}
    </CampaignListContainer>
  );
};

export default CampaignList;
