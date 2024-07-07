import styled from "styled-components";
import BannerImage from '../../../assets/bannerImage/influencer.jpg'

export const BannerContainer = styled.div`
  display: flex;
  height: 500px;
  overflow: hidden;
  background: linear-gradient(to right, #000000ef, #00000050), url(${BannerImage});
  background-position: center;
  background-size: cover;
  margin: 2rem 0;
  

  .banner-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    max-width: 500px;

    h1 {
      font-size: 2rem;
      color: #fff;
      font-weight: 600;
      line-height: 1.2;
    }

    p {
      font-size: 1rem;
      color: #ddd;
    }

    button {
      padding: 0.5rem 1rem;
      background-color: gold;
      border: none;
      border-radius: 5px;
      color: #333;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        background-color: #3bb4ff;
        color: #fff;
      }
    }
  }

  .banner-image {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 80%;
    }
  }
`;