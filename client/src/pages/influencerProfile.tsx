import { InfluencerProfileContainer } from "../assets/styledComponents/influencerProfile";
import InstagramImage from "../assets/heroImages/instagram.png";
import LinkedinImage from "../assets/heroImages/linkedin.png";
import TwitterImage from "../assets/heroImages/x.png";
import tikTokImage from "../assets/heroImages/tiktok.png";
import youtubeImage from "../assets/heroImages/youtube.png";


export const InfluencerProfile: React.FC = () => {
  return (
    <InfluencerProfileContainer>
      <div className="profileHeader">
        <div className="profile">
          <div className="profilePicture">
            <img src="https://via.placeholder.com/150" alt="profile" />
          </div>
          <div className="userinfo">
            <h1>Nathanim Tadele</h1>
            <p>Software Engineer, Personal Account, 23 Years Old</p>
            <div className="niches">
              <span>Technology</span>
              <span>Software Development</span>
              <span>Programming</span>
            </div>
          </div>
        </div>
        <div className="engagmentButtons">
            <button>Save for preview</button>
            <button>Message</button>
            <button>Edit</button>
        </div>
      </div>

      <div className="socialMedias">
        <div className="instagram">
            <div>
                <img src={InstagramImage} alt="instagram" />
                <p>nathan</p>
            </div><i className="fab fa-instagram"></i>
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
        <div className="linkedIn">
            <div>
                <img src={LinkedinImage} alt="linkedin" />
                <p>nathan</p>
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
        <div className="linkedIn">
            <div>
                <img src={LinkedinImage} alt="linkedin" />
                <p>nathan</p>
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
      </div>
    </InfluencerProfileContainer>
  );
};
