import { BrandProfileContainer } from "../assets/styledComponents/BrandProfileStyle";
import PrifleImage from "../assets/influencerProfileImages/a.jpeg";
import CampaignForm from "../components/forms/CampaignForm";
import { useState } from "react";
import { useAuth } from "../contexts/authContext";


export const BrandProfile: React.FC = () => {
  const [opencreateForm, setOpencreateForm] = useState(false);
  const { user } = useAuth();
  return (
    <BrandProfileContainer>
      <CampaignForm
        opencreateForm={opencreateForm}
        setOpencreateForm={setOpencreateForm}
        onSubmit={() => console.log("campaign created succcessfully")}
      />
      <div className="brandInfo">
        <div className="profile">
          <div className="profileImage">
            <img src={PrifleImage} alt="profile" />
          </div>
          <h1>Brand Name {user?.brandName}</h1>
          <p>Brand Description</p>
        </div>

        <div className="addressAndContactInfo">
          <div className="address">
            <h1>Address</h1>
            <p>Address</p>
          </div>
          <div className="contactInfo">
            <h1>Contact Info</h1>
            <p>Email:example@gmail.com</p>
            <p>Phone: 123456789</p>
          </div>
          <div className="socialMediaLinks">
            <h1>Social Media Links</h1>
            <p>Facebook: example</p>
            <p>Twitter: example</p>
            <p>Instagram: example</p>
          </div>
        </div>
      </div>
      <div className="moreinfos">
      <div className="header">
            <h1>Your Cataloge</h1>
            <button onClick={() => setOpencreateForm(true)}>
              Create New Campaign
            </button>
          </div>
        <div className="campaigns">
          
          <div className="campaginLists">
            <div className="campaign">
              <div className="campaignImage">
                <img src={PrifleImage} alt="campaign" />
              </div>
              <div className="info">
                <h3 className="brand">Brand Name</h3>
                <div className="date">
                  <p>
                    <strong>End:</strong> 12/12/2021
                  </p>
                </div>
                <p className="budget">
                  <strong>Budget:</strong> $200
                </p>
              </div>
            </div>
            <div className="campaign">
              <div className="campaignImage">
                <img src={PrifleImage} alt="campaign" />
              </div>
              <div className="info">
                <h3 className="brand">Brand Name</h3>
                <div className="date">
                  <p>
                    <strong>End:</strong> 12/12/2021
                  </p>
                </div>
                <p className="budget">
                  <strong>Budget:</strong> $200
                </p>
              </div>
            </div>
            <div className="campaign">
              <div className="campaignImage">
                <img src={PrifleImage} alt="campaign" />
              </div>
              <div className="info">
                <h3 className="brand">Brand Name</h3>
                <div className="date">
                  <p>
                    <strong>End:</strong> 12/12/2021
                  </p>
                </div>
                <p className="budget">
                  <strong>Budget:</strong> $200
                </p>
              </div>
            </div>
            <div className="campaign">
              <div className="campaignImage">
                <img src={PrifleImage} alt="campaign" />
              </div>
              <div className="info">
                <h3 className="brand">Brand Name</h3>
                <div className="date">
                  <p>
                    <strong>End:</strong> 12/12/2021
                  </p>
                </div>
                <p className="budget">
                  <strong>Budget:</strong> $200
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pastCampaigns">
          <div className="header">
            <h1>Past Campaigns</h1>
          </div>
          <div className="campaginLists">
            <div className="campaign">
              <div className="campaignImage">
                <img src={PrifleImage} alt="campaign" />
              </div>
              <div className="info">
                <h3 className="brand">Brand Name</h3>
                <div className="date">
                  <p>
                    <strong>End:</strong> 12/12/2021
                  </p>
                </div>
                <p className="budget">
                  <strong>Budget:</strong> $200
                </p>
              </div>
            </div>
            <div className="campaign">
              <div className="campaignImage">
                <img src={PrifleImage} alt="campaign" />
              </div>
              <div className="info">
                <h3 className="brand">Brand Name</h3>
                <div className="date">
                  <p>
                    <strong>End:</strong> 12/12/2021
                  </p>
                </div>
                <p className="budget">
                  <strong>Budget:</strong> $200
                </p>
              </div>
            </div>
            <div className="campaign">
              <div className="campaignImage">
                <img src={PrifleImage} alt="campaign" />
              </div>
              <div className="info">
                <h3 className="brand">Brand Name</h3>
                <div className="date">
                  <p>
                    <strong>End:</strong> 12/12/2021
                  </p>
                </div>
                <p className="budget">
                  <strong>Budget:</strong> $200
                </p>
              </div>
            </div>
            <div className="campaign">
              <div className="campaignImage">
                <img src={PrifleImage} alt="campaign" />
              </div>
              <div className="info">
                <h3 className="brand">Brand Name</h3>
                <div className="date">
                  <p>
                    <strong>End:</strong> 12/12/2021
                  </p>
                </div>
                <p className="budget">
                  <strong>Budget:</strong> $200
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrandProfileContainer>
  );
};
