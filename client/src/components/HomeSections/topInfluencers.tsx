import React from 'react';
import youtube from '../../assets/youtube.png';
import tiktok from '../../assets/tiktok.png';
import instagram from '../../assets/instagram.png';
import './topInfluencers.css';

export const TopInfluencers: React.FC = () => {
    return (
        <section className="top-influencers">
            <div className="top-influencers-header">
                <h1 className="top-influencers-title">Top Influencers</h1>
                <p className="top-influencers-text">Join the ranks of successful businesses who have leveraged the influence of social media stars to reach their target audience and drive sales.</p>
            </div>
            <div className="top-influencers-grid">
                <div className="top-influencer">
                    <div className="top-influencer-image">
                        <img src={youtube} alt="" />
                    </div>
                    <div className="top-influencer-content">
                        <h1 className="top-influencer-title">240+</h1>
                        <p className="top-influencer-text">Influencers on</p>
                        <span className="top-influencer-platform">YOUTUBE</span>
                    </div>
                </div>
                <div className="top-influencer">
                    <div className="top-influencer-image">
                        <img src={tiktok} alt="" />
                    </div>
                    <div className="top-influencer-content">
                        <h1 className="top-influencer-title">240+</h1>
                        <p className="top-influencer-text">Influencers on</p>
                        <span className="top-influencer-platform">TIKTOK</span>
                    </div>
                </div>
                <div className="top-influencer">
                    <div className="top-influencer-image">
                        <img src={instagram} alt="" />
                    </div>
                    <div className="top-influencer-content">
                        <h1 className="top-influencer-title">240+</h1>
                        <p className="top-influencer-text">Influencers on</p>
                        <span className="top-influencer-platform">INSTAGRAM</span>
                    </div>
                </div>
            </div>
        </section>
    );
}