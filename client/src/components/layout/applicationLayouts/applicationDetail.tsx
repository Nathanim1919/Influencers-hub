import { useState } from "react";
import { approveInfluencer } from "../../../api/campaignApi";
import { ApplicationDetailContainer } from "../../../assets/styledComponents/applicationDetailStyle";
import { IApplication } from "../../../interfaces/applicationInterface";
import { Influencer } from "../../../interfaces/influencerInterface";
import { requestHandler } from "../../../utils";
import { ApplicationAccepted } from "../../modals/successModals/applicationAccepted";

interface ApplicationDetailProps {
  application: IApplication | null;
  openApplicationDetail: boolean;
  setOpenApplicationDetail: (open: boolean) => void;
  setSelectedInfluencer: (influencer: Influencer) => void;
}

export const ApplicationDetail: React.FC<ApplicationDetailProps> = ({
  application,
  setSelectedInfluencer,
}) => {
  const handleAccept = async () => {
    if (!application?.influencerId || !application?.campaignId) {
        throw new Error("Influencer ID or Campaign ID is undefined");
    }
    await requestHandler(
      async () =>
        await approveInfluencer(
          application.campaignId._id,
          application.influencerId._id
        ),
      null,
      (data) => {
        console.log(data);
        setApplicationAccepted(true);
      },
      alert
    );
}

const [applicationAccepted, setApplicationAccepted] = useState(false);

  return (
    <ApplicationDetailContainer>
      <div className="ApplicationDetailheader">
        <div>
          <h1>{application?.influencerId.fullName}</h1>
          <p>{application?.influencerId.email}</p>
        </div>
        <div>
          <p>{application?.status}</p>
        </div>
      </div>
      <div className="moreInfo">
        <div className="coverLetter">
          <h2>Cover Letter</h2>
          <p>{application?.Proposal}</p>
        </div>
      </div>
      <div className="btns">
        <button onClick={()=>handleAccept()}>{application?.status === "approved"?"Accepted":"Accept"}</button>
        <button
          onClick={() =>
            setSelectedInfluencer(
              application?.influencerId as unknown as Influencer
            )
          }
        >
          View Profile
        </button>
      </div>
      {applicationAccepted && <ApplicationAccepted setApplicationAccepted={setApplicationAccepted} influencer={application?.influencerId}/>}
    </ApplicationDetailContainer>
  );
};
