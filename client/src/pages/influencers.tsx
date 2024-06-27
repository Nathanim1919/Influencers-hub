import CatagorieImage from "../assets/influencerProfileImages/a.jpeg";
import {InfluencersContainer} from "../assets/styledComponents/influencers";


export const Influencers: React.FC = () => {
  return (
    <InfluencersContainer>
      <div className="header">
        <div className="info">
          <h1>Discover Influencers</h1>
          <p>+2000K Influencers</p>
        </div>
        <button>Search Influencers</button>
      </div>
      <div className="topCatagories">
        <h2>Top Catagories</h2>
        <div className="listOfGatagoris">
          <div className="influncerCatagorie">
            <img src={CatagorieImage} alt="" />
            <div className="content">
                <h3>Technology</h3>
                <p>200K Influencers</p>
            </div>
          </div>
          <div className="influncerCatagorie">
            <img src={CatagorieImage} alt="" />
            <div className="content">
                <h3>Sport</h3>
                <p>200K Influencers</p>
            </div>
          </div>
          <div className="influncerCatagorie">
            <img src={CatagorieImage} alt="" />
            <div className="content">
                <h3>Technology</h3>
                <p>200K Influencers</p>
            </div>
          </div>
          <div className="influncerCatagorie">
            <img src={CatagorieImage} alt="" />
            <div className="content">
                <h3>Fashion</h3>
                <p>200K Influencers</p>
            </div>
          </div>
          <div className="influncerCatagorie">
            <img src={CatagorieImage} alt="" />
            <div className="content">
                <h3>Food</h3>
                <p>200K Influencers</p>
            </div>
          </div>
          <div className="influncerCatagorie">
            <img src={CatagorieImage} alt="" />
            <div className="content">
                <h3>Travel</h3>
                <p>200K Influencers</p>
            </div>
          </div>
        </div>
      </div>
    </InfluencersContainer>
  );
};
