import styled from "styled-components";

export const FAQContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    width: 70%;
    margin: 0 auto;
    padding: 1rem;

    .Image{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        img{
            width: 100%;
            height: 100%;
        }
    }

    .contents{
        display: grid;
        gap: 1rem;
        padding: 1rem;

        >h1{
            font-size: 2rem;
            font-weight: 600;
            color: #333;
        }
        >div{
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            background-color: #fff;
            display: flex;
            flex-direction: column;

            >h2{
                font-size: 1.2rem;
                font-weight: 600;
                color: #333;
            }

            p{
                font-size: 1rem;
                color: #6b6b6b;
            }
        }
    }
`