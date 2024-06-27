import styled from "styled-components";

export const SavedCampaignContainer = styled.div`
background-color: #f9f9f9;
    /* padding: 1rem; */
    .header {
      display: flex;
      flex-direction: column;

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
    }

    >*{
        padding: 1rem;
    }

    .campaignLists{
        display: grid;
        gap:.4rem;
        height: 80vh;
        overflow-y: auto;
        padding: 2rem 0;

        
        .campaign{
            display: flex;
            justify-content: space-around;
            gap: 1rem;
            align-items: center;
            background-color: #fff;
            padding: .4rem 1rem;
            border: 2px solid transparent;
            transition: all .2s ease-in-out;
            cursor: pointer;
            width: 100%;
            border: 1px solid transparent;
            border-bottom: 1px solid #ddd;

            .next{
                justify-self: flex-end;
                font-size: 1.8rem;
            }


            &:hover{
               background-color: #eeeeee;
                border: 1px solid #b5b2b2;
                opacity: .5;
            }

            .campaignInfo{
                display: flex;
                flex-direction: column;
                align-items: center;
                h2{
                    font-size: .8rem;
                    font-weight: bold;
                    margin: 0;
                }
                p{
                    font-size: .7rem;
                    color: #6b6b6b;
                    margin: 0;
                }
            }
            .imag{
                width: 60px;
                height: 60px;
                border-radius: 10px;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
        div.active{
            background:linear-gradient(to right, #000000, #aeabab);
            color: #fff;
            position: sticky;
            top: -2rem;
            z-index: 10;

            .campaignInfo{
                p{
                    font-size: .7rem;
                    color: #eee;
                    margin: 0;
                }
            }

            &:hover{
                background:linear-gradient(to right, #000000, #aeabab);
                opacity: .5;
            }
        }
    }
`;