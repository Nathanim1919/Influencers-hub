import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { conversationApi, influencerApi } from "../api";
import { CiLocationOn } from "react-icons/ci";
import { useConversation } from "../contexts/conversationContext";
import { InfluencerProfile } from "./influencerProfile";
import { IConversation } from "../interfaces/conversationInterface";

export const InfluencerList: React.FC = () => {

  const [influencers, setInfluencers] = useState<Influencer[] | null>(null);
  const [savedInfluencers, setSavedInfluencers] = useState<Influencer[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [displaySavedInfluencers, setDisplaySavedInfluencers] = useState(false);
  const { filterParam } = useParams();
  const { setActiveConversation } = useConversation();
  const [selectedInfluencer, setSelectedInfluencer] = useState<Influencer | null>(null);
  const [selectedInfluencerToChatWith, setSelectedInfluencerToChatWith] = useState<Influencer | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    displaySavedInfluencers
      ? setInfluencers(savedInfluencers)
      : setInfluencers(influencers);
    console.log("Influencers that I got: ", influencers);
  }, [displaySavedInfluencers, savedInfluencers, influencers]);

   // create  conversation
   const createConversation = async () => {
    if (!selectedInfluencerToChatWith) {
      console.error("Influencer is undefined.", selectedInfluencerToChatWith);
      return; // Exit the function or handle the error appropriately
    }
    await requestHandler(
      async () => await conversationApi.createNewConversation(selectedInfluencerToChatWith._id, selectedInfluencerToChatWith.role!),
      null,
      (data: IConversation) => {
        navigate("/influencer/messages");
        setActiveConversation(data);
        console.log("Conversations: ", data);
      },
      alert
    );
  };


   // Function to handle messaging action
   const onMessage = async() => {
    await createConversation();
  };


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

  const startConversation = (influencer: Influencer) => {
    setActiveUser(influencer);
    navigate("/influencer/messages");
    console.log("Starting conversation with: ", influencer);
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
              <p>
                <CiLocationOn />
                {influncer.location}
              </p>
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
                  <p>Food</p>
                  <p>Travel</p>
                  <p>Technology</p>
                </div>
              </div>
              <div className="btns">
                <button className="profile" onClick={()=>setSelectedInfluencer(influncer)}>
                  <FaRegUser />
                  Profile
                </button>
                <button
                  onClick={() => {setSelectedInfluencerToChatWith(influncer);onMessage()}}
                  className="message"
                >
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
      <div className="influencerProfile">
     {selectedInfluencer && <InfluencerProfile influencer={selectedInfluencer}/>}
      </div>
    </InfluencerListContainer>
  );
};
