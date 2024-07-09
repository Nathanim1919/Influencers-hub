import { ApplicationDetailContainer } from "../../../assets/styledComponents/applicationDetailStyle";
import { IApplication } from "../../../interfaces/applicationInterface";
import { Influencer } from "../../../interfaces/influencerInterface";

interface ApplicationDetailProps {
  application: IApplication | null;
  openApplicationDetail: boolean;
  setOpenApplicationDetail: (open: boolean) => void;
  setSelectedInfluencer: (influencer: Influencer) => void;
}

export const ApplicationDetail: React.FC<ApplicationDetailProps> = ({
  application,
  openApplicationDetail,
  setOpenApplicationDetail,
  setSelectedInfluencer
}) => {
  console.log(application);
  return (
    <ApplicationDetailContainer>
      <div className="ApplicationDetailheader">
        <div>
          <h1>{application?.influencerId.fullName}</h1>
          <p>{application?.influencerId.email}</p>
        </div>
        <div>
          <p>
           {application?.status}
          </p>
        </div>
      </div>
      <div className="moreInfo">
       <div className="coverLetter">
         <h2>Cover Letter</h2>
         <p>{application?.Proposal}</p>
       </div>
      </div>
      <div className="btns">
        <button>Accept</button>
        <button>Reject</button>
        <button onClick={()=>setSelectedInfluencer(application?.influencerId as unknown as Influencer)}>View Profile</button>
      </div>
    </ApplicationDetailContainer>
  );
};
