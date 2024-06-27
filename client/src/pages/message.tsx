import { RecentPostsContainer } from "../assets/styledComponents/messageComponent";
import ProfileImage from "../assets/influencerProfileImages/a.jpeg";
import InstagramImage from "../assets/influencerProfileImages/a.jpeg";
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
                <p>Hi John, I’m Emma from Brand X. We’re big fans of your travel content and would love to discuss a potential collaboration. Are you available for a quick chat this week?</p>
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
                <p>Hi Emma! Thank you for reaching out. I’m thrilled to hear that you enjoy my content. I’m available this Thursday and Friday. What time works best for you?</p>
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
                <p>Thursday at 3 PM would be perfect. We’re launching a new line of travel accessories and believe you’d be a great fit to help promote them. We’re thinking of a series of Instagram posts and stories. Does that interest you?</p>
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
                <p>Thursday at 3 PM works for me. Your new line sounds exciting! I’d love to hear more about your vision for the campaign and how I can contribute. Do you have any specific themes or messages in mind?</p>
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
                <p>We’re aiming to highlight the durability and stylish design of our accessories, especially for active travelers. We’d like to focus on your real-life travel experiences, showcasing how our products make your journeys more convenient. Could you also share a few behind-the-scenes moments in your stories?</p>
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
                <p>Absolutely! I think showcasing the accessories in real travel scenarios will resonate well with my audience. I can create a series of posts featuring the products in different settings, along with some engaging stories. Do you have a preferred timeline for this campaign?</p>
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
                <p>We’re looking to launch in two weeks. Would you be able to start creating content next week? Also, could you share your rates for Instagram posts and stories?</p>
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
                <p> can definitely start next week. For Instagram posts, my rate is $500 per post, and for stories, it’s $300 per story. I also offer a package deal for a series of posts and stories if that’s something you’re interested in.</p>
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
                <p>
                That sounds great. Let’s go with the package deal. We’ll send you the products this week so you can get started. Could you also send us an invoice for the collaboration?
                </p>
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
                <p>Perfect, I’ll prepare the invoice and send it over by tomorrow. I’m looking forward to working with Brand X. I’ll ensure the content aligns perfectly with your brand’s vision.</p>
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
                <p>Thank you, John. We’re excited to see your creativity in action! Let’s touch base again on Thursday to finalize the details.</p>
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
