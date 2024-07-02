import React, { useState } from "react";
import { CampaignFormContainer } from "../../assets/styledComponents/formStyle/campaignForm";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { campaignApi } from "../../api";
import { requestHandler } from "../../utils";

interface CampaignFormProps {
  onSubmit: (campaignData: any) => void;
  setOpencreateForm: (open: boolean) => void;
  opencreateForm: boolean;
}

const CampaignForm: React.FC<CampaignFormProps> = ({
  onSubmit,
  setOpencreateForm,
  opencreateForm,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [objectives, setObjectives] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [deliverables, setDeliverables] = useState("");
  const [budget, setBudget] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [hashtags, setHashtags] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const campaignData = {
      title,
      description,
      objectives,
      targetAudience:{
        ageRange,
      },
      deliverables,
      budget,
      timeline: {
        startDate,
        endDate
      },
      platforms,
      hashtags,
      influencerCriteria: {
        niche: ["fashion", "lifestyle"],
        followerCount: [1000, 10000],
        engagementRate: 3,
      },
    };

    await requestHandler(
      async () => campaignApi.createCampaign(campaignData),
      setLoading,
      (response) => {
        onSubmit()
      },
     alert
    )
  };

  return (
    <CampaignFormContainer opencreateForm={opencreateForm}>
      <form onSubmit={handleSubmit}>
        <div className="header">
          <MdKeyboardDoubleArrowRight
            onClick={() => setOpencreateForm(false)}
          />
          <h2 className="text-lg font-bold mb-4">Create New Campaign</h2>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Campaign Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
            placeholder="e.g Summer Fashion Launch 2024"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Campaign Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            required
            placeholder="e.g We are launching our new summer collection and looking for influencers to showcase our latest fashion trends."
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Objectives</label>
          <textarea
            value={objectives}
            onChange={(e) => setObjectives(e.target.value)}
            className="w-full p-2 border rounded"
            required
            placeholder="e.g      Increase brand awareness, 
            Drive traffic to our website,
            Boost sales of the summer collection"
          />
        </div>

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

        <div className="mb-4">
          <label className="block mb-2">Deliverables</label>
          <textarea
            value={deliverables}
            onChange={(e) => setDeliverables(e.target.value)}
            className="w-full p-2 border rounded"
            required
            placeholder="1 Instagram post, 2 Instagram stories, 1 TikTok video"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Budget</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full p-2 border rounded"
            required
            placeholder="500 ETB"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Preferred Social Media Platforms</label>
          <select
            multiple
            value={platforms}
            onChange={(e) =>
              setPlatforms(
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
            className="w-full p-2 border rounded"
          >
            <option value="Instagram">Instagram</option>
            <option value="YouTube">YouTube</option>
            <option value="TikTok">TikTok</option>
            <option value="Facebook">Facebook</option>
            <option value="Twitter">Twitter</option>
            {/* Add more platforms as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Hashtags/Keywords</label>
          <input
            type="text"
            placeholder="e.g #summerfashion #fashionblogger #styleinspo"
            value={hashtags}
            onChange={(e) => setHashtags(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Create Campaign
        </button>
      </form>
    </CampaignFormContainer>
  );
};

export default CampaignForm;
