import styled from "styled-components";

export const RecentPostsContainer = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 0.5fr 0.3fr;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;

  h1 {
    font-size: 1rem;
    font-weight: bold;
    background-color: #fff;
    padding: 0.4rem 1rem;
    position: sticky;
    top: 0;
  }

  .activeConversations {
    overflow-y: auto;
    height: 85vh;
    background-color: #eee;

    .actives {
      display: grid;
      /* gap: 1rem; */
      /* margin-top: 1rem; */
    }

    > * {
      margin: 0;
    }

    .conversation {
      display: flex;
      align-items: center;
      padding:.6rem 1rem;
      border-bottom: 1px solid #e3dddd;
      cursor: pointer;

      &:hover{
        background-color: white;


        *{
            opacity: 0.7;
        }
      }

      .profile {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 1rem;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .info {
        display: flex;
        flex-direction: column;

        h2 {
          font-size: .8rem;
          font-weight: bold;
          margin: 0;
        }
        p {
          font-size: 0.6rem;
          color: #999;
          margin: 0;
        }
      }
    }
  }

  .conversationBody {
    overflow: hidden;
    display: grid;
    grid-template-rows: .1fr 1fr .1fr;
    height: 90vh;
    background-color: white;
    .activeBuddy {
      display: grid;
      grid-template-columns: 0.2fr 0.8fr;
      gap: 1rem;
      background-color: #fff;
      padding: 0.5rem 1rem;

      .image {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .info {
        h2 {
          font-size: 1rem;
          font-weight: bold;
        }
        p {
          font-size: 0.8rem;
          color: #999;
        }
      }
    }
    .conversationBody{
        display: flex;
        flex-direction: column;
        padding: 2rem;
        gap: .4rem;
        overflow-y: auto;
        height: 90%;
        background-color: #eee;
        

        .message{
            display: flex;
            flex-direction: column;
            max-width: 70%;
            position: relative;
            align-self: start;

            .body{
                display: flex;
                align-items: center;
                gap: 1rem;

                img{
                    width: 30px;
                    align-self: start;
                }

                .msgContent{
                    padding: .8rem 1rem;
                    background-color: #f7f4f4;
                    border-radius: 0px 30px;
                    box-shadow: 0 3px 34px rgba(0,0,0,.08);
                }
            }

            .timestamp{
                align-self: end;
                font-size: .7rem;
                color: #908c8c;
            }

        }

        .buddyB{
            align-self: end;

            .body{
                .msgContent{
                    background-color: #1e2224;
                    align-self: end;
                    color: #fff;
                }

            }


        }
    }

    .inputform{
        display: flex;
        gap: 1rem;
        padding: 1rem;
        background-color: #fff;
        width: 100%;

        input{
            padding: .5rem 1rem;
            flex: 1;
            border: none;
            border-radius: 30px;
            box-shadow: 0 3px 34px rgba(0,0,0,.08);
        }

        button{
            padding: .5rem 1rem;
            border: none;
            border-radius: 30px;
            box-shadow: 0 3px 34px rgba(0,0,0,.08);
            background-color: #1e2224;
            color: #fff;
        }
    }
  }

  .activeBuddyInfo {
    background-color: #fff;
    padding: 0.5rem 1rem;

    .coverImage {
      width: 100%;
      height: 200px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .info {
      position: relative;
      top: -75px;
      left: 50%;
      transform: translateX(-50%);
      display: grid;
      place-items: center;

      .buddyInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
          font-size: 1.3rem;
          font-weight: bold;
          margin: 0;
        }
        p {
          font-size: 0.9rem;
          margin: 0;
          color: #999;
          text-align: center;
        }
      }
      .image {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        overflow: hidden;
        border: 5px solid #fff;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .addressInfos {
      display: grid;
      margin-bottom: 2rem;
      position: relative;
      top: -50px;

      .address {
        display: grid;
        grid-template-columns: 0.2fr 0.8fr;
        gap: 1rem;

        h2 {
          font-size: 1rem;
          font-weight: bold;
        }

        p {
          font-size: 0.8rem;
          color: #999;
        }
      }

      .contact {
        display: grid;
        grid-template-columns: 0.2fr 0.8fr;

        h2 {
          font-size: 1rem;
          font-weight: bold;
        }

        p {
          font-size: 0.8rem;
          color: #999;
        }
      }
    }

    .socials {
      display: grid;
      position: relative;
      top: -50px;

      .socialMedia {
        div.socialMediaLink {
          display: flex;
          align-items: center;
          border: 1px solid transparent;
          border-bottom: 1px solid #edeaea;
          padding: 0.4rem;
          cursor: pointer;
          transition: all .2s ease-in-out;

          &:hover {
            background-color: #f7f4f4;
            border: 1px solid #edeaea;

            > div {
                opacity:0.3 ;
              }
          }

          img {
            width: 50px;
            height: 50px;
            object-fit: cover;
            margin-right: 1rem;
          }

          > div {
            display: flex;
            flex-direction: column;
            transition: all .2s ease-in-out;


            h2 {
              font-size: 1rem;
              font-weight: bold;
            }

            p {
              font-size: 0.8rem;
              color: #999;
            }
          }
        }
      }
    }
  }
`;
