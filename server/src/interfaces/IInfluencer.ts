export interface IInfluencer {
    _id: string;
    username: string;
    password: string;
    email: string;
    profilePictureUrl: string;
    bio: string;
    location: string;
    niche: string;
    socialMediaAccounts: {
        platform: string;
        username: string;
        followerCount: number;
        engagementRate: number;
    }[];
    campaignHistory: string[];
    createdAt: Date;
    updatedAt: Date;
}
