import { BannerContainer } from '../../assets/styledComponents/homeStyles/bannerStyle';


export const Banner: React.FC = () => {
    return (
        <BannerContainer>
            <div className="banner-header">
                <h1 className="banner-title">Win the hearts and minds of your audience with influencers</h1>
                <p className="banner-text">A platform that connects businesses with influencers to help them promote their products and services.</p>
                <button>Get Started</button>
            </div>
        </BannerContainer>
    );
};