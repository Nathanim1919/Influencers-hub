import { InfluencerProfileContainer } from "../assets/styledComponents/influencerProfile";
import { RecentPosts } from "../components/influencerProfiles/recentPosts";
import { SocialMediaMetrics } from "../components/influencerProfiles/socialMediaMetrics";


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
      <div className="profileBody">
        <SocialMediaMetrics/>
        <div className="more-info">
          <RecentPosts/>
        </div>
      </div>
    </InfluencerProfileContainer>
  );
};
