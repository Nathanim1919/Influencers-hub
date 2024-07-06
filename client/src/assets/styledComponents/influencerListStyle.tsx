import styled from "styled-components";

export const InfluencerListContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  .topheader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    background-color: #fff;
    position: sticky;
    top: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    h1 {
      font-size: 24px;
      font-weight: 600;
    }

    button{
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        background-color: #db5353;
        color: #fff;
        cursor: pointer;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 0.3rem;
        &:hover{
            background-color: #e97b7b;
        }
    }
  }

  .influncerLists {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    width: 90%;
    margin: 0 auto;
    overflow-y: auto;
    height: 80vh;
    padding: 1rem;

    .Influncer {
      border-radius: 10px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      gap: 1rem;
      height: 340px;
      animation: animate 0.5s ease-in-out;
      background-color: #fff;

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background:linear-gradient(to right, #ff3b3b, #fa23ec);
        padding: 1rem;
        p {
          font-size: 14px;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 0.2rem;

          svg {
            font-size: 1.2rem;
          }

        }

        p:nth-child(2) {
          background-color: #eee;
          color: #333;
          padding: 0.3rem 0.5rem;
          border-radius: 20px;
          font-size: 0.7rem;
        }
      }

      @keyframes animate {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
        
      }
      .body {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        

        .image {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          background-color: #ddd;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .info {
          padding: 1rem;
          display: flex;
          align-items: center;
          flex-direction: column;

          .instagramUsername{
            display: flex;
            align-items: center;
            gap: 2px;
            padding-bottom:1rem ;
            font-size: 14px;
            color: #666262;
          }
          h1 {
            font-size: 15px;
            font-weight: 600;
          }
          .niches {
            display: flex;
            gap: 10px;
            p {
              font-size: 10px;
              color: #333;
              padding: 0.3rem 1rem;
              border-radius: 20px;
              background-color: #91edc0;
            }
          }
        }

        .btns {
          display: flex;
          justify-content: space-around;
          gap: 10px;
          background-color: #fff;
          margin-top: 1rem;
          width: 100%;
          border-top: 1px solid #eee;
          padding: 0.5rem 0;
          /* background: linear-gradient(to right, #3bb4ff, #78ccfa); */
          button {
            padding: 6px 10px;
            border: none;
            border-radius: 5px;
            font-size: 14px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.4rem;
            cursor: pointer;

            &:hover {
              background-color: #eee;
            }
          }

          .profile {
            color: orange;
          }

          .message {
            color: green;
          }

          .save {
            color: blue;
          }
        }
      }
    }
  }
`;
