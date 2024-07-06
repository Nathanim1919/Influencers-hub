import { useEffect, useState } from "react";
import { Influencer } from "../interfaces/influencerInterface";
import brandApi from "../api/brandApi";
import { requestHandler } from "../utils";
import { useParams } from "react-router-dom";
import { InfluencerListContainer } from "../assets/styledComponents/influencerListStyle";
import { LuMessageSquare } from "react-icons/lu";
import { IoSaveOutline } from "react-icons/io5";
import { FaInstagram, FaRegUser } from "react-icons/fa";
import AvatorImage from "../assets/heroImages/avator.jpg";
import { LiaSaveSolid } from "react-icons/lia";
import { influencerApi } from "../api";
import { CiLocationOn } from "react-icons/ci";


export const InfluencerList: React.FC = () => {
  const getFromLocalStorage = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };

  const saveToLocalStorage = (key: string, data: Influencer) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const [influencers, setInfluencers] = useState<Influencer[] | null>(
    getFromLocalStorage("filteredInfluncers")
  );
  const [savedInfluencers, setSavedInfluencers] = useState<Influencer[] | null>(
    getFromLocalStorage("savedInfluncers")
  );
  const [loading, setLoading] = useState(false);
  const [displaySavedInfluencers, setDisplaySavedInfluencers] = useState(false);
  const { filterParam } = useParams();

  useEffect(() => {
    displaySavedInfluencers
      ? setInfluencers(savedInfluencers)
      : setInfluencers(influencers);
    console.log("Influencers that I got: ", influencers);
  }, [displaySavedInfluencers, savedInfluencers, influencers]);

  const getInfluncers = async () => {
    const apiEndPoint = displaySavedInfluencers
      ? brandApi.getSavedInfluencers
      : influencerApi.getInfluencers;
    await requestHandler(
      async () => apiEndPoint(filterParam!),
      setLoading,
      (data: Influencer[]) => {
        displaySavedInfluencers
          ? setSavedInfluencers(data)
          : setInfluencers(data);
        setInfluencers(data);
        saveToLocalStorage("filteredInfluncers", data);
        saveToLocalStorage("savedInfluncers", data);
      },
      alert
    );
  };

  useEffect(() => {
    getInfluncers();
  }, [filterParam, displaySavedInfluencers]);

  // save influencer
  const saveInfluencer = async (influencerId: string) => {
    await requestHandler(
      async () => brandApi.saveInfluencer(influencerId),
      setLoading,
      (data) => {
        console.log(data);
      },
      alert
    );
  };

  return (
    <InfluencerListContainer>
      <div className="topheader">
        <h1>
          {displaySavedInfluencers ? "Saved Influencers" : "Influencer List"}
        </h1>
        <button
          onClick={() => setDisplaySavedInfluencers(!displaySavedInfluencers)}
          className="mySavedInfluencers"
        >
          <LiaSaveSolid />
          {displaySavedInfluencers ? "See All" : "Saved Influencers"}
        </button>
      </div>
      <div className="influncerLists">
        
        {influencers?.map((influncer) => (
          <div className="Influncer">
            <div className="header">
              <p><CiLocationOn/>{influncer.location}</p>
              <p>23 Years Old</p>
            </div>
            <div className="body">
              <div className="image">
                <img src={AvatorImage} alt="influencer" />
              </div>
              <div className="info">
                <h1>{influncer.fullName}</h1>
                <p className="instagramUsername">
                  <FaInstagram />
                  @NathanimTadele
                </p>
                <div className="niches">
                  {/* {influncer.niches?.map((niche) => (
                    <p>{niche}</p>
                  ))} */}
                  <p>Food</p>
                  <p>Travel</p>
                  <p>Technology</p>
                </div>
              </div>
              <div className="btns">
                <button className="profile">
                  <FaRegUser />
                  Profile
                </button>
                <button className="message">
                  <LuMessageSquare />
                  Message
                </button>
                <button
                  onClick={() => saveInfluencer(influncer?._id)}
                  className="save"
                >
                  <IoSaveOutline />
                  Save
                </button>
              </div>
            </div>
          </div>
        ))}
        {influencers?.length === 0 && <h1>No Influencers Found</h1>}
      </div>
    </InfluencerListContainer>
  );
};
