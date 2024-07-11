import styled from "styled-components";

export const SocialMediaMetricsContainer = styled.div`
    /* display: grid; */
    /* grid-template-columns:1fr; */
    /* padding-top: 1rem; */
    width: 100%;
    margin: 0 auto;
    background-color: #ffffff;
    overflow: hidden;
    overflow-y: auto;
    /* height: 75vh; */
    /* gap: 1rem; */
    
    .instagram, .linkedIn{
        display: grid;
        grid-template-columns: 1fr;


        .header{
            display: flex;
            align-items: center;
            padding: .4rem 2rem;

            input {
                padding: .4rem;
                border: 1px solid #ddd;
                border-radius: 5px;
                margin: 0 1rem;
            }
        
        div:nth-child(1){
            display: flex;
            padding:.4rem;
            align-items: center;
            gap: 1rem;
            border-bottom: 1px solid #eee;

            .info{
                display: flex;
                flex-direction: column;
                
                h1{
                    font-size: 1.2rem;
                    font-weight: bold;
                    margin: 0;
                }

                p{
                    font-size: .9rem;
                    margin: 0;
                    color: #0000009b;
                }
            }
        }
    }
}

        img{
            width: 10%;
            height: auto;
            object-fit: cover;
        }

        .statics{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            background-color: #f9f6f6;
            padding:1rem .4rem;

            .follower, .engagment, .avarageLikes, .avarageFrequency{
               display: flex;
               flex-direction: column;
                /* background-color: #ffffff; */
                /* border: 1px solid #ddd; */
                text-align: center;
                padding: .4rem;

                h2{
                    font-size: 2rem;
                    font-weight: bold;
                    margin: 0;
                }

                p{
                    font-size: 1.1rem;
                    color: #0000006d;
                    margin: 0;
                    font-weight: bold;
                }
            }
        }
    }
`;
