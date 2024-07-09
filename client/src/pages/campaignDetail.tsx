import React from "react";
import { CampaignDetailContainer } from "../assets/styledComponents/campaignDetailStyle";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Campaign } from "../interfaces/campaignInterface";
import { useAuth } from "../contexts/authContext";
import { PiApplePodcastsLogoDuotone } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import { ApplicationList } from "../components/layout/applicationLayouts/applicationList";



interface CampaignDetailProps {
  setSelectedCampaign?: (campaign: Campaign | null) => void;
  editCampaign?: boolean;
  campaign?: Campaign;
  setapplyToCampaign: (campaign: Campaign) => void;
}

export const CampaignDetail: React.FC<CampaignDetailProps> = ({
  setSelectedCampaign,
  editCampaign,
  campaign,
  setapplyToCampaign,
}) => {
  const { user } = useAuth();
  const [openApplicationList, setOpenApplicationList] = React.useState(false);
  return (
    <CampaignDetailContainer>
      <div className="header">
        {editCampaign && (
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
        )}
        <h1>{campaign?.title}</h1>
        <p>{campaign?.brandId.brandName}</p>
        {!editCampaign && (
          <span
            onClick={() => {
              setSelectedCampaign && setSelectedCampaign(null);
              setapplyToCampaign(null);
            }}
            style={{
              cursor: "pointer",
              padding: ".25rem 1rem",
              borderRadius: ".5rem",
              backgroundColor: "#eee",
              fontSize: "1rem",
              position: "absolute",
              top: "1rem",
              right: "1rem",
            }}
          >
            Back
          </span>
        )}
      </div>
      <div className="moreInfo">
        <div className="date">
          <p>
            <span>Start Date:</span>{" "}
            {campaign?.timeline?.startDate
              ? new Date(campaign.timeline.startDate).toDateString()
              : "N/A"}
          </p>
          <p>
            <span>End Date:</span>{" "}
            {campaign?.timeline?.endDate
              ? new Date(campaign.timeline.endDate).toDateString()
              : "N/A"}
          </p>
        </div>
        <div className="editCampaign">
          {editCampaign && <button><CiEdit/></button>}
          {editCampaign && <button onClick={()=>setOpenApplicationList(true)}><PiApplePodcastsLogoDuotone/>({campaign?.applications?.length})</button>}
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
      {openApplicationList && (
        <ApplicationList openApplicationList={openApplicationList} setOpenApplicationList={setOpenApplicationList} applications={campaign?.applications || []} />
      )}
    </CampaignDetailContainer>
  );
};
