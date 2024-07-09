import styled from "styled-components";

export const BrandProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;

  .brandInfo {
    border-right: 1px solid #e0e0e0;
    box-shadow: 0 6px 17px rgba(0, 0, 0, 0.07);

    .brandBio{
      padding:2rem 1rem;
      position: relative;

      > *:nth-child(1) {
       position: absolute;
        right: 1rem;
        top: .4rem;
        padding: .25rem;
        font-size: 1.5rem;
        border-radius: 50%;
        background-color: #dfd8d8;
        display: grid;
        place-items: center;
        cursor: pointer;
      }

      >p{
        font-size: .9rem;
        color: #6b6b6b;
      }

      form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        textarea{
          padding: 1rem;
          border-radius: .5rem;
          border: 1px solid #eee;
          font-size: 1rem;
          resize: none;
        }
        input{
          padding: .5rem;
          border: none;
          background-color: #e27070;
          color: #fff;
          border-radius: .5rem;
          cursor: pointer;
          transition: all .2s ease-in-out;
          &:hover{
            background-color: #e6abab;
          }
        }
      }
    }

    .profile {
      border-bottom: 1px solid #eee;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      h1 {
        font-size: 2rem;
        font-weight: bold;
      }
      p {
        color: #6b6b6b;
      }
      .profileImage {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .addressAndContactInfo {
      display: grid;
      grid-template-columns: 1fr;
      padding:0 2rem;
      gap: 2rem;
      .address {
        h1 {
          font-size: 1.5rem;
          font-weight: bold;
        }
        p {
          font-size: 1.2rem;
          color: #6b6b6b;
        }
      }
      .contactInfo {
        h1 {
          font-size: 1.5rem;
          font-weight: bold;
        }
        p {
          font-size: 1.2rem;
          color: #6b6b6b;
        }
      }
    }
  }
  .moreinfos {
    overflow-y: auto;

    .header {
        padding: 2rem;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        position: sticky;
        top: 0;
        z-index: 1;
        box-shadow: 0 6px 17px rgba(0, 0, 0, 0.07);

        h1 {
          font-size: 1.5rem;
          font-weight: bold;
        }
        button {
          border: none;
          background-color: #e27070;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          font-weight: 500;
          color: #fff;
          &:hover {
            background-color: #e6abab;
          }
        }
      }
    .campaigns {
      display: grid;
      gap: 2rem;
      padding: 2rem;
     
      .campaginLists {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 2rem;
        .campaign {
          display: grid;
          grid-template-columns: 1fr;
          border: 1px solid #eee;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.07);
          animation: anmateWhenCreate 0.5s ease-in-out;

          @keyframes anmateWhenCreate {
            from {
              transform: scale(0.8);
            }
            to {
              transform: scale(1);
            }
          }
          
          h3 {
            font-size: 1rem;
            font-weight: bold;
          }
          p {
            font-size: 1rem;
            color: #6b6b6b;
          }
          .campaignImage {
            width: 100%;
            height: 100%;
            /* border-radius: 1rem; */
            overflow: hidden;
            max-height: 150px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .info {
            display: flex;
            flex-direction: column;
            background-color: #f9f9f9;
            width: 100%;
            padding: 1rem;
            h3 {
              font-weight: bold;
            }
            p {
              font-size: 0.9rem;
              color: #6b6b6b;
            }
          }

          .bootmLinks{
           width: 100%;
           display: flex;
           justify-content: space-around;
           padding: 1rem;
        

           button{
            width: 100%;
            display: flex;
            gap: .5rem;
            align-items: center;
            padding: 0.5rem 1rem;
            border-radius: 10px;
            justify-content: center;
           }

           button:nth-child(1){
            color: blue;

            &:hover {
              background-color: #eee;
              
            }
           }

           button:nth-child(2){
            color: red;

            &:hover {
              background-color: #eee;
              
            }
           }
          
          }
        }
        }
      }
    }

    .pastCampaigns{
      display: grid;
      gap: 2rem;
      padding: 2rem;
      .header {
        padding: 1rem;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
          font-size: 1.5rem;
          font-weight: bold;
        }
        button {
          border: none;
          background-color: #e27070;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          font-weight: 500;
          color: #fff;
          &:hover {
            background-color: #e6abab;
          }
        }
      }
      .campaginLists {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        .campaign {
          display: grid;
          grid-template-columns: 0.5fr 0.5fr;
          gap: 2rem;
          h3 {
            font-size: 1.2rem;
            font-weight: bold;
          }
          p {
            font-size: 1rem;
            color: #6b6b6b;
          }
          .campaignImage {
            width: 100%;
            height: 100%;
            border-radius: 1rem;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
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
        }
      }
    }
  }
`;
