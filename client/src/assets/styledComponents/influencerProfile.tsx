import styled from "styled-components";


export const InfluencerProfileContainer = styled.div`
  /* background-color: red; */
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr;
  height: 90vh;
  padding-bottom: 2rem;


  .profileHeader{
    display: flex;
    justify-content: space-around;
    background-color: #ffffff;
    align-items: center;
    border: 1px solid #ddd;
    position: sticky;
    top: 0;

    .profile{
      display: flex;
      align-items: center;
      padding: 20px;

      .profilePicture{
        img{
          width: 150px;
          height: 150px;
          border-radius: 50%;
        }
      }

      .userinfo{
        padding: 20px;

        h1{
          font-size: 1.5rem;
        }

        p{
          font-size: 1rem;
        }

        .niches{
          display: flex;
          flex-wrap: wrap;

          span{
            background-color: #f2f2f2;
            padding: 5px 10px;
            margin: 5px;
            border-radius: 5px;
          }
        }
      }
    }

    .engagmentButtons{
      display: flex;
      justify-content: space-around;

      button{
        padding: 10px;
        margin: 10px;
        border: none;
        border-radius: 5px;
        background-color: #f2f2f2;
        cursor: pointer;
      }
    }
  }

  .profileBody{
    display: grid;
    justify-content: space-between;
    grid-template-columns: 30% 70%;
  
    padding-top: 1rem;
    width: 100%;
    margin: 0 auto;

    .more-info{
      overflow-y: auto;
      height: 60vh;
      background-color: #fbf7f7;
      padding: 1rem;
    }
  }
`;