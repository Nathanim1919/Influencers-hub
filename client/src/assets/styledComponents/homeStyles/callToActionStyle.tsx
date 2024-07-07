import styled from "styled-components";


export const CallToActionContainer = styled.div`
    width: 80%;
    background-color: #171730;
    border-radius: 30px;
    display: grid;
    place-items: center;
    margin: 5rem auto;
    padding: 5rem;

    .call-to-action-header{
        display: flex;
        flex-direction: column;
        align-items: center;
        h1{
            font-size: 2rem;
            color: #fff;
            font-weight: 600;
        }

        p{
            font-size: 1rem;
            color: #8b8787;
        }
    }

    .call-to-action-btn{
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
        button{
            padding: 0.5rem 2rem;
            background-color: #de4d37;
            border: 1px solid #fff;
            border-radius: 5px;
            color: #fff;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            &:hover{
                background-color: transparent;
                color: #fff;
            }
        }

        button.influencer{
            background-color: transparent;
        }
    }
`