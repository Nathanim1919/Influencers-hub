import { RecentPostsContainer } from "../assets/styledComponents/messageComponent";
import ProfileImage from "../assets/influencerProfileImages/a.jpeg";
import InstagramImage from "../assets/heroImages/instagram.png";
import XImage from "../assets/heroImages/x.png";
import LinkedinImage from "../assets/heroImages/linkedin.png";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

export const Message: React.FC = () => {
  return (
    <RecentPostsContainer>
      <div className="activeConversations">
        <h1>Active conversations</h1>
        <div className="actives">
          <div className="conversation">
            <div className="profile">
              <img src={ProfileImage} alt="profileImage" />
            </div>
            <div className="info">
              <h2>Nathanim Tadele</h2>
              <p>Influencer</p>
            </div>
          </div>
          <div className="conversation">
            <div className="profile">
              <img src={ProfileImage} alt="profileImage" />
            </div>
            <div className="info">
              <h2>Nathanim Tadele</h2>
              <p>Influencer</p>
            </div>
          </div>
          <div className="conversation">
            <div className="profile">
              <img src={ProfileImage} alt="profileImage" />
            </div>
            <div className="info">
              <h2>Nathanim Tadele</h2>
              <p>Influencer</p>
            </div>
          </div>
          <div className="conversation">
            <div className="profile">
              <img src={ProfileImage} alt="profileImage" />
            </div>
            <div className="info">
              <h2>Nathanim Tadele</h2>
              <p>Influencer</p>
            </div>
          </div>
          <div className="conversation">
            <div className="profile">
              <img src={ProfileImage} alt="profileImage" />
            </div>
            <div className="info">
              <h2>Nathanim Tadele</h2>
              <p>Influencer</p>
            </div>
          </div>
          <div className="conversation">
            <div className="profile">
              <img src={ProfileImage} alt="profileImage" />
            </div>
            <div className="info">
              <h2>Nathanim Tadele</h2>
              <p>Influencer</p>
            </div>
          </div>
          <div className="conversation">
            <div className="profile">
              <img src={ProfileImage} alt="profileImage" />
            </div>
            <div className="info">
              <h2>Nathanim Tadele</h2>
              <p>Influencer</p>
            </div>
          </div>
          <div className="conversation">
            <div className="profile">
              <img src={ProfileImage} alt="profileImage" />
            </div>
            <div className="info">
              <h2>Nathanim Tadele</h2>
              <p>Influencer</p>
            </div>
          </div>
          <div className="conversation">
            <div className="profile">
              <img src={ProfileImage} alt="profileImage" />
            </div>
            <div className="info">
              <h2>Nathanim Tadele</h2>
              <p>Influencer</p>
            </div>
          </div>
          <div className="conversation">
            <div className="profile">
              <img src={ProfileImage} alt="profileImage" />
            </div>
            <div className="info">
              <h2>Nathanim Tadele</h2>
              <p>Influencer</p>
            </div>
          </div>
          <div className="conversation">
            <div className="profile">
              <img src={ProfileImage} alt="profileImage" />
            </div>
            <div className="info">
              <h2>Nathanim Tadele</h2>
              <p>Influencer</p>
            </div>
          </div>
          <div className="conversation">
            <div className="profile">
              <img src={ProfileImage} alt="profileImage" />
            </div>
            <div className="info">
              <h2>Nathanim Tadele</h2>
              <p>Influencer</p>
            </div>
          </div>
          <div className="conversation">
            <div className="profile">
              <img src={ProfileImage} alt="profileImage" />
            </div>
            <div className="info">
              <h2>Nathanim Tadele</h2>
              <p>Influencer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="conversationBody">
        <div className="activeBuddy">
          <div>
            <div className="image">
              <img src={ProfileImage} alt="profileImage" />
            </div>
            <Link to="/influencer" className="buddyInfo">
              <h2>Nathanim Tadele</h2>
              <p>online</p>
            </Link>
          </div>
            <div className="options">
              <BsThreeDotsVertical />
            </div>
        </div>
        <div className="conversationBody">
          <div className="message buddyA">
            <div className="body">
              <div className="image">
                <img src={InstagramImage} alt="" />
              </div>
              <div className="msgContent">
                <p>Hello!</p>
                <span>2:50 AM</span>
              </div>
            </div>
          </div>
          <div className="message buddyB">
            <div className="body">
              <div className="image">
                <img src={InstagramImage} alt="" />
              </div>
              <div className="msgContent">
                <p>Hi!</p>
                <span>2:50 AM</span>
              </div>
            </div>
          </div>
          <div className="message buddyA">
            <div className="body">
              <div className="image">
                <img src={InstagramImage} alt="" />
              </div>
              <div className="msgContent">
                <p>Hello!</p>
                <span>2:50 AM</span>
              </div>
            </div>
          </div>
          <div className="message buddyB">
            <div className="body">
              <div className="image">
                <img src={InstagramImage} alt="" />
              </div>
              <div className="msgContent">
                <p>Hello! how are doing, Hello! how are doing, Hello! how are doing, Hello! how are doing, Hello! how are doing, Hello! how are doing, Hello! how are doing, Hello! how are doing, Hello! how are doing</p>
                <span>2:50 AM</span>
              </div>
            </div>
           
          </div>
          <div className="message buddyA">
            <div className="body">
              <div className="image">
                <img src={InstagramImage} alt="" />
              </div>
              <div className="msgContent">
                <p>Hello! how are doing, any thought?</p>
                <span>2:50 AM</span>
              </div>
            </div>
          </div>
          <div className="message buddyA">
            <div className="body">
              <div className="image">
                <img src={InstagramImage} alt="" />
              </div>
              <div className="msgContent">
                <p>How are you?</p>
                <span>2:50 AM</span>
              </div>
            </div>
          </div>
          <div className="message buddyB">
            <div className="body">
              <div className="image">
                <img src={InstagramImage} alt="" />
              </div>
              <div className="msgContent">
                <p>Hi!</p>
                <span>2:50 AM</span>
              </div>
            </div>
          </div>
          <div className="message buddyA">
            <div className="body">
              <div className="image">
                <img src={InstagramImage} alt="" />
              </div>
              <div className="msgContent">
                <p>Hello!</p>
                <span>2:50 AM</span>
              </div>
            </div>
          </div>
          <div className="message buddyB">
            <div className="body">
              <div className="image">
                <img src={InstagramImage} alt="" />
              </div>
              <div className="msgContent">
                <p>
                  Hello! how are doing, Hello! how are doing, Hello! how are
                  doing, Hello! how are doing, Hello! how are doing
                </p>
                <span>2:50 AM</span>
              </div>
            </div>
          </div>
          <div className="message buddyA">
            <div className="body">
              <div className="image">
                <img src={InstagramImage} alt="" />
              </div>
              <div className="msgContent">
                <p>Hello! how are doing, any thought?</p>
                <span>2:50 AM</span>
              </div>
            </div>
          </div>
          <div className="message buddyA">
            <div className="body">
              <div className="image">
                <img src={InstagramImage} alt="" />
              </div>
              <div className="msgContent">
                <p>How are you?</p>
                <span>2:50 AM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="inputform">
          <input type="text" placeholder="Write message..." />
          <button>Send</button>
        </div>
      </div>
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
              <h2>Nathanim Tadele</h2>
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
            <div className="socialMediaLink">
              <img src={InstagramImage} alt="" />
              <div>
                <h2>Instagram</h2>
                <p>@nathanimtadele</p>
              </div>
            </div>
            <div className="socialMediaLink">
              <img src={XImage} alt="" />
              <div>
                <h2>Twitter</h2>
                <p>@nathanimtadele</p>
              </div>
            </div>
            <div className="socialMediaLink">
              <img src={LinkedinImage} alt="" />
              <div>
                <h2>LinkedIn</h2>
                <p>Nathanim Tadele</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RecentPostsContainer>
  );
};
