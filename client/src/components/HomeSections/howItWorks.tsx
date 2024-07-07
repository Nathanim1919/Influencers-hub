import { HowItWorksContainer } from "../../assets/styledComponents/homeStyles/howitworksStyle";
import BannerImage from "../../assets/bannerImage/influencer.jpg";
export const HowItWorks: React.FC = () => {
  return (
    <HowItWorksContainer>
      <div className="how-it-works-header">
        <h1 className="how-it-works-title">How It Works</h1>
      </div>
      <div className="how-it-works-grid">
        <div className="how-it-works-step">
          <div className="content">
            <h2 className="how-it-works-step-number">01</h2>
            <h1 className="how-it-works-step-title">Create an Account</h1>
            <p className="how-it-works-step-text">
              Sign up for an account with InfluencerHub to get started.
            </p>
          </div>
          <div className="image">
            <img src={BannerImage} alt="" />
          </div>
        </div>
        <div className="how-it-works-step">
          <div className="image">
            <img src={BannerImage} alt="" />
          </div>
          <div className="content">
            <h2 className="how-it-works-step-number">02</h2>
            <h1 className="how-it-works-step-title">Find Influencers</h1>
            <p className="how-it-works-step-text">
              Search for influencers that match your target audience.
            </p>
          </div>
        </div>
        <div className="how-it-works-step">
          <div className="content">
            <h2 className="how-it-works-step-number">03</h2>
            <h1 className="how-it-works-step-title">Collaborate</h1>
            <p className="how-it-works-step-text">
              Reach out to influencers to collaborate on campaigns.
            </p>
          </div>
          <div className="image">
            <img src={BannerImage} alt="" />
          </div>
        </div>
        <div className="how-it-works-step">
          <div className="image">
            <img src={BannerImage} alt="" />
          </div>
          <div className="content">
            <h2 className="how-it-works-step-number">04</h2>
            <h1 className="how-it-works-step-title">Track Results</h1>
            <p className="how-it-works-step-text">
              Track the results of your campaigns to measure success.
            </p>
          </div>
        </div>
      </div>
    </HowItWorksContainer>
  );
};
