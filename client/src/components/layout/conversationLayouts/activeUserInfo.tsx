import ProfileImage from "../../../assets/influencerProfileImages/a.jpeg";
import InstagramImage from "../../../assets/influencerProfileImages/a.jpeg";
import XImage from "../../../assets/heroImages/x.png";
import LinkedinImage from "../../../assets/heroImages/instagram.png";
import { IConversation } from "../../../interfaces/conversationInterface";
import { useAuth } from "../../../contexts/authContext";
import { Link } from "react-router-dom";

interface ActiveUserInfoProps {
  activeConversation: IConversation | null;
}
export const ActiveUserInfo: React.FC<ActiveUserInfoProps> = ({
  activeConversation,
}) => {
  // filter FullName, BrandName, ProfileImage, Logo based on activeUser.role
  const { user } = useAuth();
  return (
    <div className="activeBuddyInfo">
      <div className="buddy">
        <div className="coverImage">
          <img src={ProfileImage} alt="profileImage" />
        </div>
        <div className="info">
          <div className="image">
            <img src={ProfileImage} alt="profileImage" />
          </div>
          <div className="buddyInfo">
            <h2>
              {activeConversation?.participants?.find(
                (p) => p.participantId._id !== user?._id
              )?.participantId.fullName ||
                activeConversation?.participants?.find(
                  (p) => p.participantId._id !== user?._id
                )?.participantId.brandName ||
                "Unknown"}
            </h2>
            <p>online</p>
          </div>
        </div>
      </div>
      <div className="addressInfos">
        <div className="address">
          <h2>Location</h2>
          <p>Addis Ababa, Ethiopia</p>
        </div>
        <div className="contact">
          <h2>Contact</h2>
          <p>+251 911 11 11 11</p>
        </div>
      </div>
      <div className="socials">
        <div className="socialMedia">
          {/* <div className="socialMediaLink">
            <img src={InstagramImage} alt="" />
            <div>
              <h2>Instagram</h2>
              <p>@nathanimtadele</p>
            </div>
          </div> */}
          {/* <div className="socialMediaLink">
            <img src={XImage} alt="" />
            <div>
              <h2>Twitter</h2>
              <p>@nathanimtadele</p>
            </div>
          </div> */}
          {/* <div className="socialMediaLink">
            <img src={LinkedinImage} alt="" />
            <div>
              <h2>Instagram</h2>
              <Link to={`
              https://www.instagram.com/${user?.socialMediaAccounts?.[0].username}
              `}>{user?.socialMediaAccounts?.[0].username}</Link>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
