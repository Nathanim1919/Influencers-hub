import React from "react";
import { FeaturesContainer } from "../../assets/styledComponents/homeStyles/featuresStyle";
import SearchImage from '../../assets/featuresImage/binocular.png';
import ConnectImage from '../../assets/featuresImage/macos-messages.png';
import CreateImage from '../../assets/featuresImage/new.png';
import TrackImage from '../../assets/featuresImage/doughnut-chart.png';
import InflunecerImage from '../../assets/featuresImage/social-media-marketing.png';

export const Features: React.FC = () => {
  return (
    <FeaturesContainer>
      <div className="features-header">
        <div>
        <h1 className="features-title">What We Offer</h1>
        <p className="features-text">
          Influencer Hub is a platform that connects businesses with influencers
          to help them promote their products and services.
        </p>
        <div className="image">
            <img src={InflunecerImage} alt="" />
        </div>
        <button>Get Started</button>
        </div>
      </div>
      <div className="features-grid">
        <div className="feature">
          <div className="image">
         <div className="image">
            <img src={SearchImage} alt="" />
         </div>
          </div>
          <div>
            <h1 className="feature-title">Find Influencers</h1>
            <p className="feature-text">
              Search for influencers by category, location, and social media
              platform to find the perfect match for your business.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="image">
            <img src={ConnectImage} alt="" />
          </div>
          <div>
            <h1 className="feature-title">Connect with Influencers</h1>
            <p className="feature-text">
              Send messages to influencers to discuss collaboration
              opportunities and negotiate terms.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="image">
            <img src={CreateImage} alt="" />
          </div>
          <div>
            <h1 className="feature-title">Create Campaigns</h1>
            <p className="feature-text">
              Create campaigns to promote your products and services through
              influencer marketing.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="image">
            <img src={TrackImage} alt="" />
          </div>
          <div>
            <h1 className="feature-title">Track Progress</h1>
            <p className="feature-text">
              Track the progress of your campaigns to see how well they are
              performing and make adjustments as needed.
            </p>
          </div>
        </div>
      </div>
    </FeaturesContainer>
  );
};
