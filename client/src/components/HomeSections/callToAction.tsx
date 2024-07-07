import {CallToActionContainer} from "../../assets/styledComponents/homeStyles/callToActionStyle";


export const CallToAction: React.FC = () => {
    return (
        <CallToActionContainer>
            <div className="call-to-action-header">
                <h1 className="call-to-action-title">Ready to get started?</h1>
                <p className="call-to-action-text">Sign up as a brand or influencer to get started. No credit card required.</p>
            </div>
            <div className="call-to-action-btn">
                <button className="brand">I'm a Brand</button>
                <button className="influencer">I'm an Influencer</button>
            </div>
        </CallToActionContainer>
    );
};