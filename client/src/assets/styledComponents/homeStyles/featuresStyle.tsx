import styled from "styled-components";

export const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: .3fr .7fr;
  gap: 20px;
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  margin-top: 2rem;

  .features-header{
    display: flex;
    flex-direction: column;
    /* justify-content:center; */
    /* align-items: center; */
    margin-bottom: 20px;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    height: 100%;

    h1{
      font-size: 24px;
      margin-bottom: 1rem;
      color: #c1bb9a;
      font-weight: 600;
    }

    button{
      width: 100%;
        padding: 0.5rem 1rem;
        background-color: gold;
        border: none;
        border-radius: 5px;
        color: #333;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover{
          background-color: #3bb4ff;
          color: #fff;
        }

    }
  }

  .features-grid{
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));


    .feature{
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      background-color: #fff;
        animation: animate 0.5s ease-in-out;


      @keyframes animate {
        from{
          transform: scale(0.8);
        }
        to{
          transform: scale(1);
        }
      }

      .image{
        display: flex;
        /* justify-content: center; */
        /* align-items: center; */
        img{
          width: 100px;
          height: 100px;
          object-fit: cover;
        }
      }

      h1{
        font-size: 1.5rem;
        font-weight: bold;
      }

      .icon{
        font-size: 2rem;
        color: #3bb4ff;
      }

      h3{
        font-size: 1.2rem;
        font-weight: 500;
      }

      p{
        font-size: 1rem;
        color: #6b6b6b;
      }
    }
  }
`;