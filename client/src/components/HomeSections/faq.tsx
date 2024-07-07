import QuestionMarkImage from '../../assets/bannerImage/question-mark.png'
import {FAQContainer} from '../../assets/styledComponents/homeStyles/faqStyle'

export const Faq: React.FC = () => {
  return (
    <FAQContainer>
      {/* <div className='Image'>
        <img src={QuestionMarkImage} alt='Question Mark' />
      </div> */}
      <div className='contents'>
        <h1>Frequently Asked Questions</h1>
        <div>
          <h2>What is InfluencerHUB?</h2>
          <p>
            InfluencerHUB is a platform that connects businesses with
            influencers to help them promote their products and services.
          </p>
        </div>
        <div>
          <h2>How does it work?</h2>
          <p>
            Brands can sign up and create campaigns. Influencers can sign up and
            apply to campaigns. Once a brand approves an influencer, they can
            collaborate on the campaign.
          </p>
        </div>

        <div>
          <h2>How much does it cost?</h2>
          <p>
            It is free to sign up and create campaigns. Brands only pay
            influencers when they collaborate on a campaign.
          </p>
        </div>
        <div>
          <h2>How do I get started?</h2>
          <p>
            Sign up as a brand or influencer to get started. No credit card
            required.
          </p>
        </div>
      </div>
    </FAQContainer>
  );
};
