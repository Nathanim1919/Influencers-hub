import React from "react";
import MyImage from "../assets/influencerProfileImages/a.jpeg";
import { SavedCampaignContainer } from "../assets/styledComponents/savedCampaignStyle";
import { GrFormNextLink } from "react-icons/gr";


export const SavedCampaign: React.FC = () => {
  return (
    <SavedCampaignContainer>
      <div className="header">
        <h1>My Campaigns</h1>
        <p>Your saved Campaigns</p>
      </div>
        <div className="campaignLists">
          <div className="campaign">
            <div className="imag">
                <img src={MyImage} alt="campaign" />
            </div>
            <div className="campaignInfo">
              <h2>Campaign Title</h2>
              <p>Brand Name</p>
            </div>
            <div className="next">
                <GrFormNextLink/>
            </div>
          </div>
          <div className="campaign">
            <div className="imag">
                <img src={MyImage} alt="campaign" />
            </div>
            <div className="campaignInfo">
              <h2>Campaign Title</h2>
              <p>Brand Name</p>
            </div>
            <div className="next">
                <GrFormNextLink/>
            </div>
          </div>
          <div className="campaign">
            <div className="imag">
                <img src={MyImage} alt="campaign" />
            </div>
            <div className="campaignInfo">
              <h2>Campaign Title</h2>
              <p>Brand Name</p>
            </div>
            <div className="next">
                <GrFormNextLink/>
            </div>
          </div>
          <div className="campaign active">
            <div className="imag">
                <img src={MyImage} alt="campaign" />
            </div>
            <div className="campaignInfo">
              <h2>Campaign Title</h2>
              <p>Brand Name</p>
            </div>
            <div className="next">
                <GrFormNextLink/>
            </div>
          </div>
          <div className="campaign">
            <div className="imag">
                <img src={MyImage} alt="campaign" />
            </div>
            <div className="campaignInfo">
              <h2>Campaign Title</h2>
              <p>Brand Name</p>
            </div>
            <div className="next">
                <GrFormNextLink/>
            </div>
          </div>
          <div className="campaign">
            <div className="imag">
                <img src={MyImage} alt="campaign" />
            </div>
            <div className="campaignInfo">
              <h2>Campaign Title</h2>
              <p>Brand Name</p>
            </div>
            <div className="next">
                <GrFormNextLink/>
            </div>
          </div>
          <div className="campaign">
            <div className="imag">
                <img src={MyImage} alt="campaign" />
            </div>
            <div className="campaignInfo">
              <h2>Campaign Title</h2>
              <p>Brand Name</p>
            </div>
            <div className="next">
                <GrFormNextLink/>
            </div>
          </div>
          <div className="campaign">
            <div className="imag">
                <img src={MyImage} alt="campaign" />
            </div>
            <div className="campaignInfo">
              <h2>Campaign Title</h2>
              <p>Brand Name</p>
            </div>
            <div className="next">
                <GrFormNextLink/>
            </div>
          </div>
          <div className="campaign">
            <div className="imag">
                <img src={MyImage} alt="campaign" />
            </div>
            <div className="campaignInfo">
              <h2>Campaign Title</h2>
              <p>Brand Name</p>
            </div>
            <div className="next">
                <GrFormNextLink/>
            </div>
          </div>
          <div className="campaign">
            <div className="imag">
                <img src={MyImage} alt="campaign" />
            </div>
            <div className="campaignInfo">
              <h2>Campaign Title</h2>
              <p>Brand Name</p>
            </div>
            <div className="next">
                <GrFormNextLink/>
            </div>
          </div>
          <div className="campaign">
            <div className="imag">
                <img src={MyImage} alt="campaign" />
            </div>
            <div className="campaignInfo">
              <h2>Campaign Title</h2>
              <p>Brand Name</p>
            </div>
            <div className="next">
                <GrFormNextLink/>
            </div>
          </div>
          <div className="campaign">
            <div className="imag">
                <img src={MyImage} alt="campaign" />
            </div>
            <div className="campaignInfo">
              <h2>Campaign Title</h2>
              <p>Brand Name</p>
            </div>
            <div className="next">
                <GrFormNextLink/>
            </div>
          </div>
          <div className="campaign">
            <div className="imag">
                <img src={MyImage} alt="campaign" />
            </div>
            <div className="campaignInfo">
              <h2>Campaign Title</h2>
              <p>Brand Name</p>
            </div>
            <div className="next">
                <GrFormNextLink/>
            </div>
          </div>
          
        </div>
    </SavedCampaignContainer>
  );
};
