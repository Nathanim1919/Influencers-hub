import { BrandProfileContainer } from "../assets/styledComponents/BrandProfileStyle";
import PrifleImage from "../assets/influencerProfileImages/a.jpeg";
import CampaignForm from "../components/forms/CampaignForm";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { MdEdit } from "react-icons/md";
import { requestHandler } from "../utils";
import { campaignApi } from "../api";
import { Campaign } from "../interfaces/campaignInterface";
import { TbListDetails } from "react-icons/tb";
import { CampaignDetail } from "./campaignDetail";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


export const BrandProfile: React.FC = () => {
  const [opencreateForm, setOpencreateForm] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(
    null
  );
  const [editBio, setEditBio] = useState(false);
  const [loading, setLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { user } = useAuth();

  const fetchCampaigns = async () => {
    await requestHandler(
      async () => campaignApi.getBrandCampaigns(),
      setLoading,
      (response) => {
        setCampaigns(response);
      },
      alert
    );
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <BrandProfileContainer>
      <CampaignForm
        opencreateForm={opencreateForm}
        setOpencreateForm={setOpencreateForm}
        onSubmit={() => {
          fetchCampaigns();
          setOpencreateForm(false);
        }}
      />
      <div className="brandInfo">
        <div className="profile">
          <div className="profileImage">
            <img src={PrifleImage} alt="profile" />
          </div>
          <h1>{user?.brandName}</h1>
          <div className="brandBio">
            <MdEdit onClick={() => setEditBio(true)} />
            <p>We are a dedicate and profitable brand around the globe.</p>
            {editBio && (
              <form action="">
                <textarea
                  name=""
                  id=""
                  cols={5}
                  rows={3}
                  placeholder="Write your bio"
                ></textarea>
                <input type="submit" value="Save"></input>
              </form>
            )}
          </div>
        </div>

        <div className="addressAndContactInfo">
          <div className="address">
            <h1>Address</h1>
            <p>{user?.location}</p>
          </div>
          <div className="contactInfo">
            <h1>Contact Info</h1>
            <p>Email:example@gmail.com</p>
            <p>Phone: 123456789</p>
          </div>
          <div className="socialMediaLinks">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaTwitter />
          </div>
        </div>
      </div>
      <div className="moreinfos">
        {!selectedCampaign && (
          <div className="header">
            <h1>Your Cataloge</h1>
            <button onClick={() => setOpencreateForm(true)}>
              Create New Campaign
            </button>
          </div>
        )}
        {!selectedCampaign && (
          <div className="campaigns">
            <div className="campaginLists">
              {campaigns?.map((campaign: Campaign) => (
                <div className="campaign">
                  <div className="campaignImage">
                    <img src={PrifleImage} alt="campaign" />
                  </div>
                  <div className="info">
                    <h3 className="brand">{(campaign.title)?.slice(0, 20)}...</h3>
                    <div className="date">
                      <p>Until {campaign?.timeline?.endDate}</p>
                    </div>
                    <p className="budget">
                      <strong>Budget:</strong> {campaign.budget}
                    </p>
                  </div>
                  <div className="moreInfo"></div>
                  <div className="bootmLinks">
                    <button onClick={() => setSelectedCampaign(campaign)}>
                      <TbListDetails />
                      See Details
                    </button>

                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCampaign && (
          <CampaignDetail
            campaign={selectedCampaign}
            setSelectedCampaign={setSelectedCampaign}
            editCampaign={true}
          />
        )}
      </div>
    </BrandProfileContainer>
  );
};
