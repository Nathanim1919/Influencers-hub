import styled from "styled-components";

export const CampaignCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  box-shadow: 0 6px 17px rgba(0, 0, 0, 0.07);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  background-color: white;
  margin-bottom: 1rem;
  margin: 0 auto;

  .campaignImage {
    width: 100%;
    height: 100%;
    overflow: hidden;
    height: 200px;

    
    img {
      box-shadow: 0 12px 34px rgba(0, 0, 0, 0.7);
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .campaignInfo {
    display: grid;
    gap: 1rem;
    

    h1 {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }

  .Brandinfo{
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding: 0 1rem;

    .brandLogo{
      width: 40px;
      height: 40px;
      background-color: #ddd;
      border-radius: 50%;

    }

    .budget{
      display: flex;
      align-items: center;
      gap: 1rem;


      span{
        background-color: #eee;
        color: #333;
        padding: 0.3rem 1rem;
        font-size: 0.8rem;
        border-radius: 0.5rem;
      }
    }
  }

  .diescription{
      padding:0 1rem;

    h3 {
      font-size: 1rem;
      font-weight: bold;
      color: #333;
    }

    p {
      font-size: 0.9rem;
      font-weight: 500;
      color: #6b6b6b;
    }
  }

  p {
    font-size: 0.9rem;
    font-weight: 500;
    color: #6b6b6b;
  }

  .info {
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
    width: 100%;
    
    
    h3 {
      font-weight: bold;
    }

    p {
      font-size: 0.9rem;
      color: #6b6b6b;
    }
  }

  .btns {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem;
    button {
      border: none;
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      font-weight: 500;
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .viewDetail {
      background-color: #ffffff;
      color: #333;

      &:hover {
        background-color: #e3e3e3;
      }
    }

    .apply {
      background-color: #81ac64;
      color: #ffffff;

      &:hover {
        background-color: #e3e3e3;
      }
    }

    .saveForPreview {
      background-color: #f8f8f8;
      color: #3464f4;

      &:hover {
        background-color: #e3e3e3;
      }
    }

    button.applied {
      background-color: #459fff;
      color: #ffffff;
    }

    button.saved {
      background-color: #3464f4;
      color: #ffffff;
    }
  }
`;
