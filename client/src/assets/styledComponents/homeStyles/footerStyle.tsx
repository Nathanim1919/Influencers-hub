import styled from "styled-components";


export const FooterContainer = styled.div`
    width: 100%;
    background-color: #171730;
    padding: 2rem 0;
    display: grid;
    place-items: center;
    color: #fff;
    margin-top: 2rem;

    .footer-container{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        width: 80%;

        .footer-links{
            h1{
                font-size: 1.5rem;
                color: #fff;
                font-weight: 600;
            }

            p{
                font-size: 1rem;
                color: #8b8787;
            }

            ul{
                list-style: none;
                padding: 0;
                margin: 0;
                li{
                    font-size: 1rem;
                    color: #8b8787;
                    margin: 0.5rem 0;
                    cursor: pointer;
                    transition: all 0.2s ease-in-out;
                    &:hover{
                        color: #fff;
                    }
                }
            }
        }
    }

    .footer-socials{
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        a{
            text-decoration: none;
            color: #fff;
            font-size: 1.5rem;
            transition: all 0.2s ease-in-out;
            &:hover{
                color: #3bb4ff;
            }
        }
    }

    .footer-credits{
        margin-top: 2rem;
        font-size: 1rem;
        color: #8b8787;
    }
`