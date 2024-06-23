import styled from "styled-components";


export const InfluencerProfileContainer = styled.div`
  /* background-color: red; */
  display: grid;


  .profileHeader{
    display: flex;
    justify-content: space-around;
    background-color: #ffffff;
    align-items: center;
    border: 1px solid #ddd;

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

  .socialMedias{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;

    .instagram, .linkedIn{
      background-color: #ffffff;
      border: 1px solid #ddd;
      padding: 20px;

      div{
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        img{
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 20px;
        }

        p{
          font-size: 1.2rem;
        }
      }

      .statics{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;

        div{
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #f2f2f2;
          padding: 20px;
          border-radius: 5px;

          h2{
            font-size: 1.5rem;
          }

          p{
            font-size: 1rem;
          }
        }
      }
    }
  }
`;