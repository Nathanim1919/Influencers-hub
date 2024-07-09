import React from "react";
import { IApplication } from "../../../interfaces/applicationInterface";
import { ApplicationListContainer } from "../../../assets/styledComponents/applicationListStyle";
import { IoMdClose } from "react-icons/io";
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
  const [openApplicationDetail, setOpenApplicationDetail] =
    React.useState(false);
  const [selectedApplication, setSelectedApplication] =
    React.useState<IApplication | null>(null);
  const [selectedInfluencer, setSelectedInfluencer] =
    React.useState<Influencer | null>(null);
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
      {selectedInfluencer && (
        <div className="influencerProfile">
          <InfluencerProfile
            influencer={selectedInfluencer}
            setInfluencer={setSelectedInfluencer}
          />
        </div>
      )}
      <div className="">
        <div className="ApplicationListheader">
          <h1>Applications</h1>
          <div className="close" style={{
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            borderRadius: "50%",
            cursor: "pointer",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}>
            <IoMdClose onClick={() => setOpenApplicationList(false)} />
          </div>
        </div>
        <div className="applicationList">
          {applications.map((application) => (
            <div
              className={application.status === 'approved'?"approvedApplications":"applicationCard"}
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
