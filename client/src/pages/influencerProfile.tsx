import { InfluencerProfileContainer } from "../assets/styledComponents/influencerProfile";
import { RecentPosts } from "../components/influencerProfiles/recentPosts";
import { SocialMediaMetrics } from "../components/influencerProfiles/socialMediaMetrics";
import MyImage from "../assets/influencerProfileImages/a.jpeg";
import { SponsoredPosts } from "../components/influencerProfiles/sponsoredPosts";
import { CiEdit } from "react-icons/ci";
import { Influencer } from "../interfaces/influencerInterface";
import { useAuth } from "../contexts/authContext";
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useConversation } from "../contexts/conversationContext";



interface InfluencerProfileProps {
  influencer?: Influencer;
  setInfluencer?: (influencer: Influencer | null) => void;
}

export const InfluencerProfile: React.FC<InfluencerProfileProps> = ({
  influencer,
  setInfluencer
}) => {
  const { user } = useAuth();
  const {setActiveConversation} = useConversation();
  const isOwner = user?._id === influencer?._id;


  return (
    <InfluencerProfileContainer>
      <div className="profileHeader">
        {!isOwner && <div className="back" onClick={()=>setInfluencer?.(null)}>
          <IoMdArrowRoundBack />
        </div>}
        <div className="profile">
          <div className="profilePicture">
            <img src={MyImage} alt="profile" />
          </div>
          <div className="userinfo">
            <h1>{influencer?.fullName}</h1>
            <p>Software Engineer, Personal Account, 23 Years Old</p>
            <div className="niches">
              <span>Technology</span>
              <span>Software Development</span>
              <span>Programming</span>
            </div>
          </div>
        </div>
        {(isOwner || !influencer) && (
          <button>
            <CiEdit />
            Edit Profile
          </button>
        )}
        {(!isOwner || influencer) && (
          <button style={{
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#3f51b5",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "5px",

          }}>
            {/* <CiEdit /> */}
            Message
          </button>
        )}
      </div>
      <div className="profileBody">
        <SocialMediaMetrics isOwner={isOwner} influencer={influencer} />
        <div className="more-info">
          <RecentPosts isOwner={isOwner} influencer={influencer} />
          <SponsoredPosts isOwner={isOwner} influencer={influencer} />
        </div>
      </div>
    </InfluencerProfileContainer>
  );
};
