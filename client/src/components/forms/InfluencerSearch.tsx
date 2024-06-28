import React, { useState } from "react";
import {InfluencersSearchContainer} from '../../assets/styledComponents/formStyle/InfluencerSearchStyle';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


interface InfluencerSearchProps {
  onSearch: (filters: any) => void;
  setOpenSearch: (open: boolean) => void;
  openSearch: boolean;
}

const InfluencerSearch: React.FC<InfluencerSearchProps> = ({ onSearch, setOpenSearch, openSearch }) => {
  const [socialMedia, setSocialMedia] = useState("");
  const [followersCount, setFollowersCount] = useState("");
  const [gender, setGender] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [location, setLocation] = useState("");
  const [engagementRate, setEngagementRate] = useState("");
  const [niche, setNiche] = useState("");
  const [language, setLanguage] = useState("");
  const [verified, setVerified] = useState("");
  const [recentActivity, setRecentActivity] = useState("");

  const handleSearch = () => {
    const filters = {
      socialMedia,
      followersCount,
      gender,
      ageRange,
      location,
      engagementRate,
      niche,
      language,
      verified,
      recentActivity,
    };
    onSearch(filters);
  };

  return (
    <InfluencersSearchContainer openSearch={openSearch}>
      <div className="header">
       <MdKeyboardDoubleArrowRight onClick={()=> setOpenSearch(false)}/> 
      <h2 className="text-lg font-bold mb-4">Search Influencers</h2>
      </div>
      <div className="inputContainer">
        {/* Social Media Platform */}
        <div>
          <label className="block mb-2">Social Media Platform</label>
          <select
            value={socialMedia}
            onChange={(e) => setSocialMedia(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">All Platforms</option>
            <option value="Instagram">Instagram</option>
            <option value="YouTube">YouTube</option>
            <option value="TikTok">TikTok</option>
            {/* Add more platforms as needed */}
          </select>
        </div>

        {/* Followers Count */}
        <div>
          <label className="block mb-2">Followers Count</label>
          <select
            value={followersCount}
            onChange={(e) => setFollowersCount(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Any</option>
            <option value="1K-10K">1K-10K</option>
            <option value="10K-50K">10K-50K</option>
            <option value="50K-100K">50K-100K</option>
            <option value="100K+">100K+</option>
          </select>
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-2">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Any</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Age Range */}
        <div>
          <label className="block mb-2">Age Range</label>
          <select
            value={ageRange}
            onChange={(e) => setAgeRange(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Any</option>
            <option value="18-24">18-24</option>
            <option value="25-34">25-34</option>
            <option value="35-44">35-44</option>
            <option value="45+">45+</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block mb-2">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Engagement Rate */}
        <div>
          <label className="block mb-2">Engagement Rate</label>
          <select
            value={engagementRate}
            onChange={(e) => setEngagementRate(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Any</option>
            <option value="1%-5%">1%-5%</option>
            <option value="5%-10%">5%-10%</option>
            <option value="10%+">10%+</option>
          </select>
        </div>

        {/* Niche/Category */}
        <div>
          <label className="block mb-2">Niche/Category</label>
          <input
            type="text"
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Language */}
        <div>
          <label className="block mb-2">Language</label>
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Verified Account */}
        <div>
          <label className="block mb-2">Verified Account</label>
          <select
            value={verified}
            onChange={(e) => setVerified(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Any</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Recent Activity */}
        <div>
          <label className="block mb-2">Recent Activity</label>
          <select
            value={recentActivity}
            onChange={(e) => setRecentActivity(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Any</option>
            <option value="Last month">Active in the last month</option>
            <option value="Last 6 months">Active in the last 6 months</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between items-center">
      
      <h2>120 Found</h2>

      <button
        onClick={handleSearch}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
      </div>
    </InfluencersSearchContainer>
  );
};

export default InfluencerSearch;
