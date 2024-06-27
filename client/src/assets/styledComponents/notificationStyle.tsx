import styled from "styled-components";

export const NotifcationContanier = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
  background-color: #fff;
  overflow-y: auto;
  height: 90vh;

  .header {
    position: sticky;
    top: 0;
    background-color: #ffffff;
    backdrop-filter: blur(10px);
    box-shadow: 0 3px 23px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    h1 {
      font-size: 1.1rem;
      font-weight: bold;
      margin: 0;
    }
    p {
      font-size: 0.8rem;
      color: #6b6b6b;
      margin: 0;
    }
  }

  .notifications {
    display: grid;
    gap: 1rem;
    padding: 1rem;
    width: 70%;
    margin: auto;
    .notification {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      border: 1px solid transparent;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      border: 1px solid transparent;
      border-bottom: 1px solid #ddd;

      h2 {
        font-size: 1rem;
        font-weight: bold;
        margin: 0;
        display: flex;
        gap: 1rem;
        align-items: center;

        > *:nth-child(1) {
          padding: 0.5rem;
          border-radius: 50%;
          background-color: #eee;
          color: #333;
          font-size: 2.4rem;
        }
      }

      p {
        font-size: 0.9rem;
        color: #6b6b6b;
        margin: 0;
      }

      span {
        font-size: 0.7rem;
        color: #6b6b6b;
        align-self: flex-end;
        margin: 0;
      }
      &:hover {
        background-color: #eeeeee;
        border: 1px solid #b5b2b2;
        border: 1px solid transparent;
        opacity: 0.5;
      }
    }
  }
`;
