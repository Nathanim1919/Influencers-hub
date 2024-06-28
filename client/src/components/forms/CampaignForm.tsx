import React, { useState } from "react";
import { CampaignFormContainer } from "../../assets/styledComponents/formStyle/campaignForm";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

interface CampaignFormProps {
  onSubmit: (campaignData: any) => void;
  setOpencreateForm: (open: boolean) => void;
  opencreateForm: boolean;
}

const CampaignForm: React.FC<CampaignFormProps> = ({ onSubmit, setOpencreateForm, opencreateForm }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [objectives, setObjectives] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [deliverables, setDeliverables] = useState("");
  const [budget, setBudget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [hashtags, setHashtags] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const campaignData = {
      title,
      description,
      objectives,
      targetAudience,
      deliverables,
      budget,
      startDate,
      endDate,
      platforms,
      hashtags,
    };
    onSubmit(campaignData);
  };

  return (
    <CampaignFormContainer opencreateForm={opencreateForm}>
      <form onSubmit={handleSubmit}>
        <div className="header">
          <MdKeyboardDoubleArrowRight  onClick={() => setOpencreateForm(false)}/>
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
            placeholder="Enter campaign title"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Campaign Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            required
            placeholder="Describe your campaign"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Objectives</label>
          <textarea
            value={objectives}
            onChange={(e) => setObjectives(e.target.value)}
            className="w-full p-2 border rounded"
            required
            placeholder="Enter campaign objectives"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Target Audience</label>
          <textarea
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            className="w-full p-2 border rounded"
            required
            placeholder="Enter target audience"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Deliverables</label>
          <textarea
            value={deliverables}
            onChange={(e) => setDeliverables(e.target.value)}
            className="w-full p-2 border rounded"
            required
            placeholder="Enter campaign deliverables"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Budget</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full p-2 border rounded"
            required
            placeholder="Enter campaign budget"
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
