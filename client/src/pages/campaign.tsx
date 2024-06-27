import CampaignCard from "../components/cards/campaignCard";
import { CampaignListContainer } from "../assets/styledComponents/campaignListStyle";
import { SavedCampaign } from "../components/savedCampaign";
import { CampaignDetail } from "./campaignDetail";

const CampaignList: React.FC = () => {
  const campaigns = [
    {
      title: "Summer Vibes Collection",
      brand: "BeachWear Co.",
      description: "Promote our new summer collection of swimwear.",
      startDate: "July 1, 2024",
      endDate: "July 31, 2024",
      budget: 1500,
    },
    {
      title: "Fit & Fabulous",
      brand: "FitnessPro",
      description: "Showcase our new range of fitness apparel.",
      startDate: "June 15, 2024",
      endDate: "August 15, 2024",
      budget: 2000,
    },
    {
      title: "Tech for Life",
      brand: "GadgetHub",
      description: "Highlight our latest tech gadgets.",
      startDate: "July 5, 2024",
      endDate: "August 5, 2024",
      budget: 1200,
    },
    {
        title: "Fit & Fabulous",
        brand: "FitnessPro",
        description: "Showcase our new range of fitness apparel.",
        startDate: "June 15, 2024",
        endDate: "August 15, 2024",
        budget: 2000,
      },
      {
        title: "Tech for Life",
        brand: "GadgetHub",
        description: "Highlight our latest tech gadgets.",
        startDate: "July 5, 2024",
        endDate: "August 5, 2024",
        budget: 1200,
      },
      {
        title: "Fit & Fabulous",
        brand: "FitnessPro",
        description: "Showcase our new range of fitness apparel.",
        startDate: "June 15, 2024",
        endDate: "August 15, 2024",
        budget: 2000,
      },
      {
        title: "Tech for Life",
        brand: "GadgetHub",
        description: "Highlight our latest tech gadgets.",
        startDate: "July 5, 2024",
        endDate: "August 5, 2024",
        budget: 1200,
      },
      {
        title: "Fit & Fabulous",
        brand: "FitnessPro",
        description: "Showcase our new range of fitness apparel.",
        startDate: "June 15, 2024",
        endDate: "August 15, 2024",
        budget: 2000,
      },
      {
        title: "Tech for Life",
        brand: "GadgetHub",
        description: "Highlight our latest tech gadgets.",
        startDate: "July 5, 2024",
        endDate: "August 5, 2024",
        budget: 1200,
      },
      {
        title: "Fit & Fabulous",
        brand: "FitnessPro",
        description: "Showcase our new range of fitness apparel.",
        startDate: "June 15, 2024",
        endDate: "August 15, 2024",
        budget: 2000,
      },
      {
        title: "Tech for Life",
        brand: "GadgetHub",
        description: "Highlight our latest tech gadgets.",
        startDate: "July 5, 2024",
        endDate: "August 5, 2024",
        budget: 1200,
      },
    {
      title: "Eco-Friendly Living",
      brand: "GreenEarth",
      description: "Promote our eco-friendly home products.",
      startDate: "June 20, 2024",
      endDate: "July 20, 2024",
      budget: 1800,
    },
    {
      title: "Travel in Style",
      brand: "Wanderlust Gear",
      description: "Feature our latest travel accessories.",
      startDate: "July 10, 2024",
      endDate: "August 10, 2024",
      budget: 2500,
    },
    {
      title: "Summer Vibes Collection",
      brand: "BeachWear Co.",
      description: "Promote our new summer collection of swimwear.",
      startDate: "July 1, 2024",
      endDate: "July 31, 2024",
      budget: 1500,
    },
    {
      title: "Summer Vibes Collection",
      brand: "BeachWear Co.",
      description: "Promote our new summer collection of swimwear.",
      startDate: "July 1, 2024",
      endDate: "July 31, 2024",
      budget: 1500,
    },
  ];

  return (
    <CampaignListContainer>
      {/* {<div className="lists">
        <div className="header">
          <h1>Campaigns</h1>
          <p>
            Apply to the campaigns below to start collaborating with brands.
          </p>
        </div>
        <div className="campaignLists">
          {campaigns.map((campaign, index) => (
            <CampaignCard key={index} {...campaign} />
          ))}
        </div>
      </div>} */}
      <CampaignDetail/>
      <SavedCampaign />
    </CampaignListContainer>
  );
};

export default CampaignList;
