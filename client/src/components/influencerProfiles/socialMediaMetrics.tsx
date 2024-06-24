import InstagramImage from "../../assets/heroImages/instagram.png";
import LinkedinImage from "../../assets/heroImages/linkedin.png";
import TwitterImage from "../../assets/heroImages/x.png";
import tikTokImage from "../../assets/heroImages/tiktok.png";
import youtubeImage from "../../assets/heroImages/youtube.png";
import {SocialMediaMetricsContainer} from "../../assets/styledComponents/socialMediaMetrics";
export const SocialMediaMetrics: React.FC = () => {
    return (
        <SocialMediaMetricsContainer>
             <div className="instagram">
            <div className="header">
                <img src={InstagramImage} alt="instagram" />
                <div className="info">
                    <h1>Instagram</h1>
                    <p>@nathan</p>
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
        <div className="linkedIn">
        <div className="header">
                <img src={LinkedinImage} alt="instagram" />
                <div className="info">
                    <h1>LinkedIn</h1>
                    <p>@nathan</p>
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
        <div className="linkedIn">
        <div className="header">
                <img src={TwitterImage} alt="instagram" />
                <div className="info">
                    <h1>X</h1>
                    <p>@nathan</p>
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
        <div className="linkedIn">
        <div className="header">
                <img src={youtubeImage} alt="instagram" />
                <div className="info">
                    <h1>Youtube</h1>
                    <p>@nathan</p>
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
        <div className="linkedIn">
        <div className="header">
                <img src={tikTokImage} alt="instagram" />
                <div className="info">
                    <h1>TikTok</h1>
                    <p>@nathan</p>
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