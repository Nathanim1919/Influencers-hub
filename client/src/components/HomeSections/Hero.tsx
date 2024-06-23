import faceIcon from "../../assets/heroImages/facebook.png";
import instgramIcon from "../../assets/heroImages/instagram.png";
import linkedIn from "../../assets/heroImages/linkedin.png";
import tiktok from "../../assets/heroImages/tiktok.png";
import youtube from "../../assets/heroImages/youtube.png";
import whatsapp from "../../assets/heroImages/whatsapp.png";
import x from "../../assets/heroImages/x.png";
import { motion } from "framer-motion";
import girlImage from "../../assets/heroImages/girl.png";
export const Hero: React.FC = () => {
  return (
    <section
      className="hero grid grid-cols-2 gap-5 justify-around items-center m-auto overflow-hidden"
      style={{ height: "90vh", width: "80vw" }}
    >
      <div className="hero-content">
        <h1
          className="hero-title text-5xl font-bold"
          style={{ lineHeight: "70px" }}
        >
          Smart Ways To Build <br /> Your Brand With <br /> Great{" "}
          <span className="text-orange-500">Influencers</span>
        </h1>
        <p className="hero-text my-3">
          Join the ranks of successful businesses who have leveraged the
          influence of social media stars to reach their target audience and
          drive sales.
        </p>

        <div className="flex items-center gap-5">
        <button className="shadow-lg hover:bg-blue-400 hero-button bg-blue-500 text-white px-5 py-2">
          Get Started as Influencer
        </button>
        <button className="shadow-lg hover:bg-red-400 hero-button bg-red-500 text-white px-5 py-2">
          Get Started as a Brand
        </button>
        </div>
      

      </div>
      <div
        className="hero-image grid grid-cols-4 justify-center items-center w-full h-400 p-10  "
        style={{ backdropFilter: "blur(10px) saturate(10%)" }}
      >
        <div>
          <div>
          </div>
          <div className="relative">
          <div className="absolute opacity-1 z-20 left-[-3rem] bg-white flex flex-col items-center rounded-sm top-[7rem] shadow-lg">
          <h1 className="p-1 font-bold text-3xl m-0">240+</h1>
            <p className="border-t-2 p-1 text-gray-500 m-0">Influencers on</p>
            <span className="m-0 p-2 flex items-center justify-center font-bold text-white w-full bg-red-700">YOUTUBE</span>
            </div>
            <img className="" src={youtube} alt="" style={{ width: "100px" }} />
          </div>
        </div>

        <div className="relative">
          <div className="absolute opacity-1 z-20 left-[-3rem] bg-white bg-opacity-3 backdrop-blur-md flex flex-col  items-center justify-center rounded-sm top-[-8rem] shadow-lg">
            <h1 className="p-1 font-bold text-3xl m-0">240+</h1>
            <p className="border-t-2 p-1 text-gray-500 m-0">Influencers on</p>
            <span className="m-0 p-2 flex items-center justify-center font-bold text-white w-full bg-black">TIKTOK</span>
          </div>
          <img className="" src={tiktok} alt="" style={{ width: "320px",  }} />
        </div>
        <div>
          <div className="relative">
            <div className="absolute opacity-1 z-20 left-[3rem] bg-white flex flex-col items-center rounded-sm top-[-9rem] shadow-lg">
            <h1 className="p-1 font-bold text-3xl m-0">240+</h1>
            <p className="border-t-2 p-1 text-gray-500 m-0">Influencers on</p>
            <span className="m-0 p-2 flex items-center justify-center font-bold text-white w-full bg-red-500">INSTAGRAM</span>
            </div>
            <img
              className=""
              src={instgramIcon}
              alt=""
              style={{ width: "300px" }}
            />
          </div>
          <div className="relative">
          <div className="absolute opacity-1 z-20 left-[-3rem] bg-white flex flex-col items-center rounded-sm top-[6rem] shadow-lg">
          <h1 className="p-1 font-bold text-3xl m-0">120+</h1>
            <p className="border-t-2 p-1 text-gray-500 m-0">Influencers on</p>
            <span className="m-0 p-2 flex items-center justify-center font-bold text-white w-full bg-black">X</span>
            </div>
            <img className="" src={x} alt="" style={{ width: "100px" }} />
          </div>
        </div>

        <div className="relative w-full">
          <div className="w-full absolute opacity-1 z-20  bg-white flex flex-col items-center rounded-sm top-[6rem] left-5 shadow-lg">
          <h1 className="p-1 font-bold text-3xl m-0">240+</h1>
            <p className="border-t-2 p-1 text-gray-500 m-0">Influencers on</p>
            <span className="m-0 p-2 flex items-center justify-center font-bold text-white w-full bg-blue-500">LINKEDIN</span>
            </div>
            <img
              className=""
              src={linkedIn}
              alt=""
              style={{ width: "100px" }}
            />
        
        </div>
      </div>
    </section>
  );
};
