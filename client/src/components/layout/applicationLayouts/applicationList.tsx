import React from "react";
import { IApplication } from "../../../interfaces/applicationInterface";
import { ApplicationListContainer } from "../../../assets/styledComponents/applicationListStyle";
import { LuShrink } from "react-icons/lu";
import { ApplicationDetail } from "./applicationDetail";
import { InfluencerProfile } from "../../../pages/influencerProfile";
import { Influencer } from "../../../interfaces/influencerInterface";

interface ApplicationProsp {
  applications: IApplication[];
  openApplicationList: boolean;
  setOpenApplicationList: (open: boolean) => void;
}
export const ApplicationList: React.FC<ApplicationProsp> = ({
  setOpenApplicationList,
  openApplicationList,
  applications,
}) => {
  console.log(applications);
  const [openApplicationDetail, setOpenApplicationDetail] =
    React.useState(false);
  const [selectedApplication, setSelectedApplication] =
    React.useState<IApplication | null>(null);
  // const [viewInfluencerProfile, setViewInfluencerProfile] = React.useState(false);
  const [selectedInfluencer, setSelectedInfluencer] = React.useState<Influencer | null>(null);
  return (
    <ApplicationListContainer openApplicationList={openApplicationList}>
      {selectedApplication && !selectedInfluencer && (
        <ApplicationDetail
        setSelectedInfluencer={setSelectedInfluencer}
          application={selectedApplication}
          openApplicationDetail={openApplicationDetail}
          setOpenApplicationDetail={setOpenApplicationDetail}
        />
      )}
      {selectedInfluencer &&  <div className="influencerProfile">
        <InfluencerProfile influencer={selectedInfluencer} setInfluencer={setSelectedInfluencer}/>
      </div>
      }
      <div className="">
        <div className="ApplicationListheader">
          <h1>Applications</h1>
          <LuShrink onClick={() => setOpenApplicationList(false)} />
        </div>
        <div className="applicationList">
          {applications.map((application) => (
            <div
              className="applicationCard"
              onClick={() => setSelectedApplication(application)}
            >
              <div className="applicationInfo">
                <div className="applicationImage">
                  {/* <img src={application.influencerId.profileImage} alt="influencer" /> */}
                </div>
                <div className="applicationDetails">
                  <h3>{application.influencerId?.fullName}</h3>
                  <p>{application.influencerId?.email}</p>
                  <p>{application.influencerId?.phone}</p>
                </div>
              </div>
              <div className="applicationStatus">
                <p>{application.status}</p>
              </div>
            </div>
          ))}
          {applications.length === 0 && (
            <div className="emptyApplication">
              <p>No applications yet</p>
            </div>
          )}
        </div>
      </div>
     
    </ApplicationListContainer>
  );
};
