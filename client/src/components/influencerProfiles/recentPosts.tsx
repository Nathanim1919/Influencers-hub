import { RecentPostsContainer } from "../../assets/styledComponents/recentPosts";
import InstagtamImage from "../../assets/heroImages/instagram.png";
import TiktokImage from "../../assets/heroImages/tiktok.png";
import YoutubeImage from "../../assets/heroImages/youtube.png";
import LinkedinImage from "../../assets/heroImages/linkedin.png";
import { IoIosHeart } from "react-icons/io";
import { LiaCommentsSolid } from "react-icons/lia";
import { IoShareSocial } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import MyImage from "../../assets/influencerProfileImages/a.jpeg"
import { Influencer } from "../../interfaces/influencerInterface";

interface RecentPostsProps {
  influencer?: Influencer;
  isOwner?:boolean
}


export const RecentPosts: React.FC<RecentPostsProps> = ({influencer, isOwner}) => {
  return (
    <RecentPostsContainer>
        <div className="header">
        <h1>Featured Posts</h1>
        {(isOwner || !influencer) && <div className="editIcon">
            <CiEdit/>
        </div>}
        </div>
      <div className="posts">
        <div className="post">
          <div className="image">
            <img src={MyImage} alt="post" />
            <img className="socialIcon" src={InstagtamImage} sizes="w-20 h-40" alt="" />
          </div>
          <div className="postInfo">
            <h2>Post Title</h2>
            <div className="statics">
                <div className="likes">
                    <IoIosHeart/>
                    <p>234</p>
                </div>
                <div className="commects">
                    <LiaCommentsSolid/>
                    <p>153</p>
                </div>
                <div className="shares">
                    <IoShareSocial/>
                    <p>44</p>
                </div>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="image">
            <img src={MyImage} alt="post" />
            <img className="socialIcon" src={TiktokImage} sizes="w-20 h-40" alt="" />
          </div>
          <div className="postInfo">
            <h2>Post Title</h2>
            <div className="statics">
                <div className="likes">
                    <IoIosHeart/>
                    <p>234</p>
                </div>
                <div className="commects">
                    <LiaCommentsSolid/>
                    <p>153</p>
                </div>
                <div className="shares">
                    <IoShareSocial/>
                    <p>44</p>
                </div>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="image">
            <img src={MyImage} alt="post" />
            <img className="socialIcon" src={YoutubeImage} sizes="w-20 h-40" alt="" />
          </div>
          <div className="postInfo">
            <h2>Post Title</h2>
            <div className="statics">
                <div className="likes">
                    <IoIosHeart/>
                    <p>234</p>
                </div>
                <div className="commects">
                    <LiaCommentsSolid/>
                    <p>153</p>
                </div>
                <div className="shares">
                    <IoShareSocial/>
                    <p>44</p>
                </div>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="image">
            <img src={MyImage} alt="post" />
            <img className="socialIcon" src={LinkedinImage} sizes="w-20 h-40" alt="" />
          </div>
          <div className="postInfo">
            <h2>Post Title</h2>
            <div className="statics">
                <div className="likes">
                    <IoIosHeart/>
                    <p>234</p>
                </div>
                <div className="commects">
                    <LiaCommentsSolid/>
                    <p>153</p>
                </div>
                <div className="shares">
                    <IoShareSocial/>
                    <p>44</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </RecentPostsContainer>
  );
};
