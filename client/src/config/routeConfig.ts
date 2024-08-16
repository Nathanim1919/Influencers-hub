// routeConfig.ts

// Route parameter constants
const BRAND = "brand";
const INFLUENCER = "influencer";
const CAMPAIGN = "campaigns";
const BRAND_ID = "brandId";
const INFLUENCER_ID = "influencerId";
const CAMPAIGN_ID = "campaignId";


// Route paths
export const routes  = {
    home:"/",
    auth: {
        login: "/login",
        register: "/register",
    },
    brand: {
        home: `/${BRAND}`,
        brandDetail: `/${BRAND}/:${BRAND_ID}`,
        campaignDetail: `/${BRAND}/${CAMPAIGN}/:${CAMPAIGN_ID}`,
    },
    influencer: {
        home: `/${INFLUENCER}`,
        influencerDetail: `/${INFLUENCER}/:${INFLUENCER_ID}`,
        campaigns: `/${INFLUENCER}/${CAMPAIGN}`,
        campaignDetail: `/${INFLUENCER}/${CAMPAIGN}/:${CAMPAIGN_ID}`,
    },

    commonRoutes: {
        messages: "/message",
        notifications: "/notification",
        influencers: `/influencers`,
        filterInfluencers: `/influencers/:filter`,
        campaigns: `/${CAMPAIGN}`,
    },
}
