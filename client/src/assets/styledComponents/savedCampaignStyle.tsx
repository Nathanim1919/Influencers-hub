import styled from "styled-components";

export const SavedCampaignContainer = styled.div`
  background-color: #f9f9f9;
  .header {
    display: flex;
    flex-direction: column;
    flex-direction: row;
    justify-content: space-between;

    h1 {
      font-size: 1rem;
      font-weight: bold;
      margin: 0;
    }

    p {
      font-size: 0.9rem;
      color: #6b6b6b;
      margin: 0;
    }

    .list {
      font-size: 2rem;
      position: relative;
      > *:nth-child(1) {
        cursor: pointer;
        color: #000;

        &:hover {
          color: #ddd;
        }
      }

      .options {
        display: flex;
        position: absolute;
        top: 3rem;
        right: 1rem;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        background-color: #fff;
        flex-direction: column;
        li {
          cursor: pointer;
          font-size: 0.8rem;
          color: #6b6b6b;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          z-index: 10;
          &:hover {
            color: #000;
            background-color: #eee;
          }
        }
      }
    }
  }

  > * {
    padding: 1rem;
  }

  .campaignLists {
    display: grid;
    gap: 0.4rem;
    height: 90vh;
    overflow-y: auto;
    padding: 2rem 1rem;

    .campaign {
      display: flex;
      justify-content: space-around;
      gap: 1rem;
      align-items: center;
      background-color: #fff;
      padding: 0.4rem 1rem;
      border: 2px solid transparent;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      width: 100%;
      border: 1px solid transparent;
      border-bottom: 1px solid #ddd;
      animation: animateWhenShowUp 0.5s ease-in-out;

      @keyframes animateWhenShowUp {
        from {
          opacity: 0;
          transform: translateY(1rem);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .next {
        justify-self: flex-end;
        font-size: 1.8rem;
      }

      &:hover {
        background-color: #eeeeee;
        border: 1px solid #b5b2b2;
        opacity: 0.5;
      }

      .campaignInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
          font-size: 0.8rem;
          font-weight: bold;
          margin: 0;
        }
        p {
          font-size: 0.7rem;
          color: #6b6b6b;
          margin: 0;
        }
      }
      .imag {
        width: 60px;
        height: 60px;
        border-radius: 10px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    div.active {
      background-color: #333;
      border-radius: 5px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      color: #fff;
      position: sticky;
      top: -2rem;
      z-index: 10;
      border: none;

      .campaignInfo {
        p {
          font-size: 0.7rem;
          color: #eee;
          margin: 0;
        }
      }

      &:hover {
        background: linear-gradient(to right, #000000, #aeabab);
        opacity: 0.5;
      }
    }
  }
`;
