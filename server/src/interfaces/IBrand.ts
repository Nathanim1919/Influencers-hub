export interface IBrand {
    id: string;
    username: string;
    password: string;
    email: string;
    brandName: string;
    logoUrl: string;
    website: string;
    bio: string;
    industry: string;
    contactPerson: string;
    contactEmail: string;
    phoneNumber?: string;
    location: string;
    campaigns: string[];
    createdAt: Date;
    updatedAt: Date;
}
