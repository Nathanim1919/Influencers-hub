export const InfluencerProfile: React.FC = () => {
    return (
        <section className="influencer-profile bg-green-800">
            <div className="influencer-profile-header">
                <h1 className="influencer-profile-title">Influencer Profile</h1>
                <p className="influencer-profile-text">Welcome to your profile page. Here you can edit your profile, view your messages, campaigns, and settings.</p>
            </div>
            <div className="influencer-profile-content">
                <div className="influencer-profile-image">
                    <img src="https://via.placeholder.com/150" alt="" />
                </div>
                <div className="influencer-profile-details">
                    <h1 className="influencer-profile-name">John Doe</h1>
                    <p className="influencer-profile-email">
                        <span>Email:</span>
                        <span>
                            <a href="mailto:"></a>
                        </span>
                    </p>
                    <p className="influencer-profile-platform">
                        <span>Platform:</span>
                        <span>Instagram</span>
                    </p>
                    <p className="influencer-profile-followers">
                        <span>Followers:</span>
                        <span>240+</span>
                    </p>
                    <p className="influencer-profile-engagement">
                        <span>Engagement:</span>
                        <span>10%</span>
                    </p>
                </div>
            </div>
        </section>
    );
};