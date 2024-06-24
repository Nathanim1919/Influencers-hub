import { RecentPostsContainer } from "../assets/styledComponents/messageComponent";
import ProfileImage from "../assets/influencerProfileImages/a.jpeg";

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
          <div className="image">
            <img src={ProfileImage} alt="profileImage" />
          </div>
          <div className="buddyInfo">
            <h2>Nathanim Tadele</h2>
            <p>online</p>
          </div>
        </div>
        <div className="conversationBody">
          <div className="message buddyA">
            <p>Hey! How are you doing?</p>
          </div>
          <div className="messageB">
            <p>Hey! How are you doing?</p>
          </div>
          <div className="message buddyA">
            <p>Hey! How are you doing?</p>
          </div>
          <div className="message buddyB">
            <p>Hey! How are you doing?</p>
          </div>
        </div>
        <div className="inputform">
          <input type="text" />
          <button>Send</button>
        </div>
      </div>
      <div className="activeBuddyInfo">
        <div className="buddy">
          <div className="image">
            <img src={ProfileImage} alt="profileImage" />
          </div>
          <div className="buddyInfo">
            <h2>Nathanim Tadele</h2>
            <p>online</p>
          </div>
        </div>
        <div className="buddyInfo">
          <div className="info">
            <h2>Location</h2>
            <p>Addis Ababa, Ethiopia</p>
          </div>
          <div className="info">
            <h2>Age</h2>
            <p>23</p>
          </div>
        </div>
      </div>
    </RecentPostsContainer>
  );
};
