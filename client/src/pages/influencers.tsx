import CatagorieImage from "../assets/influencerProfileImages/a.jpeg";
import InstagramImage from "../assets/heroImages/instagram.png";
import TikTokImage from "../assets/heroImages/tiktok.png";
import TwitterImage from "../assets/heroImages/x.png";
import { InfluencersContainer } from "../assets/styledComponents/influencers";
import InfluencerSearch from "../components/forms/InfluencerSearch";
import { useEffect, useState } from "react";
import { influencerApi } from "../api";
import { requestHandler } from "../utils";
import { Influencer } from "../interfaces/influencerInterface";
import { Link } from "react-router-dom";


export const Influencers: React.FC = () => {

  const [openSearch, setOpenSearch] = useState(false);
  const [filter, setFilters] = useState("");
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(false);


  return (
    <InfluencersContainer>
      <InfluencerSearch onSearch={(filters) => console.log(filters)} openSearch={openSearch} setOpenSearch={setOpenSearch}/>
      <div className="header">
        <div className="info">
          <h1>Discover Influencers</h1>
          <p>+2000K Influencers</p>
        </div>
        <button onClick={() => setOpenSearch(true)}>Search Influencers</button>
      </div>
      <div className="topCatagories">
        <h2>Top Catagories</h2>
        <div className="listOfGatagoris">
        <Link to={`/influencer/all`} className="influncerCatagorie" onClick={()=>setFilters('technology')}>
            <img src={CatagorieImage} alt="" />
            <div className="content">
              <h3>All</h3>
              <p>20000K Influencers</p>
            </div>
          </Link>
          <Link to={`/influencer/sport`} className="influncerCatagorie" onClick={()=>setFilters('technology')}>
            <img src={CatagorieImage} alt="" />
            <div className="content">
              <h3>Technology</h3>
              <p>200K Influencers</p>
            </div>
          </Link>
          <Link to={`/influencer/influncers/${filter}`} className="influncerCatagorie" onClick={()=>setFilters('sport')}>
            <img src={CatagorieImage} alt="" />
            <div className="content">
              <h3>Sport</h3>
              <p>200K Influencers</p>
            </div>
          </Link>
          <Link to={`/influncers/${filter}`} className="influncerCatagorie" onClick={()=>setFilters('technology')}>
            <img src={CatagorieImage} alt="" />
            <div className="content">
              <h3>Technology</h3>
              <p>200K Influencers</p>
            </div>
          </Link>
          <Link to={`/influncers/${filter}`} className="influncerCatagorie" onClick={()=>setFilters('fashion')}>
            <img src={CatagorieImage} alt="" />
            <div className="content">
              <h3>Fashion</h3>
              <p>200K Influencers</p>
            </div>
          </Link>
          <Link to={`/influncers/${filter}`} className="influncerCatagorie" onClick={()=>setFilters('food')}>
            <img src={CatagorieImage} alt="" />
            <div className="content">
              <h3>Food</h3>
              <p>200K Influencers</p>
            </div>
          </Link>
          <Link to={`/influncers/${filter}`} className="influncerCatagorie" onClick={()=>setFilters('travel')}>
            <img src={CatagorieImage} alt="" />
            <div className="content">
              <h3>Travel</h3>
              <p>200K Influencers</p>
            </div>
          </Link>
        </div>
        <div className="topSocialMediasCatagories">
          <h2>Filter With Social Media</h2>
          <div className="lists">
            <div className="instagram">
              <div className="image">
                <img src={InstagramImage} alt="" />
              </div>
              <div className="info">
                <h1>Instagram</h1>
                <p>200K Influencers</p>
              </div>
            </div>
            <div className="toktok">
              <div className="image">
                <img src={TikTokImage} alt="" />
              </div>
              <div className="info">
                <h1>TikTok</h1>
                <p>200K Influencers</p>
              </div>
            </div>
            <div className="twitter">
              <div className="image">
                <img src={TwitterImage} alt="" />
              </div>
              <div className="info">
                <h1>Twitter</h1>
                <p>200K Influencers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InfluencersContainer>
  );
};
