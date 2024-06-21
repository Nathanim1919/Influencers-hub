import faceIcon from "../../assets/heroImages/facebook.png";
import instgramIcon from "../../assets/heroImages/instagram.png";
import linkedIn from "../../assets/heroImages/linkedin.png";
import tiktok from "../../assets/heroImages/tiktok.png";
import youtube from "../../assets/heroImages/youtube.png";
export const Hero: React.FC = () => {
  return (
    <section
      className="hero grid grid-cols-2 gap-5 justify-around items-center m-auto overflow-hidden"
      style={{ height: "90vh", width: "80vw" }}
    >
      <div className="hero-content">
        <h1 className="hero-title text-5xl font-bold" style={{lineHeight:"70px"}}>
          Smart Ways To Build <br /> Your Brand With <br /> Great <span className="text-orange-500">Influencers</span>
        </h1>
        <p className="hero-text my-3">
          Join the ranks of successful businesses who have leveraged the
          influence of social media stars to reach their target audience and
          drive sales.
        </p>
        <button className="hero-button bg-blue-500 text-white px-4 py-2 rounded-lg">
          Get Started
        </button>
      </div>
      <div
  className="hero-image bg-gray-100/50 grid grid-cols-3 justify-center items-center w-full h-400 p-10  shadow-2xl rounded-lg"
  style={{ backdropFilter: "blur(10px) saturate(180%)", boxShadow: "0 1px 55px rgba(0, 0, 0, 0.05)" }}
>
        <img className="" src={faceIcon} alt="" style={{ width: "100px" }} />
        <img className="" src={youtube} alt="" style={{ width: "120px" }} />
        <img className="" src={tiktok} alt="" style={{ width: "220px", gridColumn:"span 2" }} />
        
        <img
          className=""
          src={instgramIcon}
          alt=""
          style={{ width: "240px", gridColumn: "span 1"}}
        />
        <img className="" src={linkedIn} alt="" style={{ width: "120px" }} />
        
      </div>
    </section>
  );
};
