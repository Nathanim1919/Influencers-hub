import InstagramImage from "../../assets/heroImages/instagram.png";
// import LinkedinImage from "../../assets/heroImages/linkedin.png";
// import TwitterImage from "../../assets/heroImages/x.png";
// import tikTokImage from "../../assets/heroImages/tiktok.png";
// import youtubeImage from "../../assets/heroImages/youtube.png";
import { SocialMediaMetricsContainer } from "../../assets/styledComponents/socialMediaMetrics";
import { useState } from "react";
import { Influencer } from "../../interfaces/influencerInterface";
import { requestHandler } from "../../utils";
import { socialLinksApi } from "../../api";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
interface SocialMediaMetrixsProps {
  influencer?: Influencer
  isOwner?:boolean
}
export const SocialMediaMetrics: React.FC<SocialMediaMetrixsProps> = ({influencer, isOwner}) => {
  const [editUserName, setEditUsername] = useState(false);
  const {user} = useAuth();
  const [instagramUserName, setInstagramUserName] = useState("");


  const handelInstagramUserNameSave = async () => {
      await requestHandler(
        async () => await socialLinksApi.saveInstagramuserName(instagramUserName || ''),
        null,
        (data) => console.log(data),
        (error) => console.log(error)
      )
  };

  
  return (
    <SocialMediaMetricsContainer>
      <div className="instagram">
        <div className="header">
          {!editUserName && <div>
            <img src={InstagramImage} alt="instagram" />
            <div className="info">
              <h1>Instagram</h1>
              <Link to={`https://www.instagram.com/${instagramUserName}`}>{instagramUserName}</Link>
            </div>
          </div>}
          {
            editUserName ? (
              <input type="text" onChange={(e)=>setInstagramUserName(e.target.value)} placeholder="Enter new username" />
            ) : null
          }
        {(isOwner || !influencer)&&  <div className="edit">
            <button onClick={()=>{handelInstagramUserNameSave(); setEditUsername(!editUserName)}}>{editUserName?"Save":"Edit"}</button>
          </div>}
        </div>
        {/* <div className="statics">
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
        </div> */}
      </div>
    </SocialMediaMetricsContainer>
  );
};
