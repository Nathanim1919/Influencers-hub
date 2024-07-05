import InstagramImage from "../../assets/heroImages/instagram.png";
// import LinkedinImage from "../../assets/heroImages/linkedin.png";
// import TwitterImage from "../../assets/heroImages/x.png";
// import tikTokImage from "../../assets/heroImages/tiktok.png";
// import youtubeImage from "../../assets/heroImages/youtube.png";
import { SocialMediaMetricsContainer } from "../../assets/styledComponents/socialMediaMetrics";
import { useState } from "react";
export const SocialMediaMetrics: React.FC = () => {
  const [editUserName, setEditUsername] = useState(false);  
  return (
    <SocialMediaMetricsContainer>
      <div className="instagram">
        <div className="header">
          {!editUserName && <div>
            <img src={InstagramImage} alt="instagram" />
            <div className="info">
              <h1>Instagram</h1>
              <p>@nathan</p>
            </div>
          </div>}
          {
            editUserName ? (
              <input type="text" placeholder="Enter new username" />
            ) : null
          }
          <div className="edit">
            <button onClick={()=>setEditUsername(!editUserName)}>{editUserName?"Save":"Edit"}</button>
          </div>
        </div>
        <div className="statics">
          <div className="follower">
            <h2>100k</h2>
            <p>Followers</p>
          </div>
          <div className="engagment">
            <h2>10k</h2>
            <p>Engagement</p>
          </div>
          <div className="avarageLikes">
            <h2>10k</h2>
            <p>Avarage Likes</p>
          </div>
          <div className="avarageFrequency">
            <h2>10k</h2>
            <p>Avarage Frequency</p>
          </div>
        </div>
      </div>
    </SocialMediaMetricsContainer>
  );
};
