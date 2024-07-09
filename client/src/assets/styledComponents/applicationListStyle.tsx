import styled from "styled-components";

interface ApplicationListContainerProps {
    openApplicationList: boolean;
}

export const ApplicationListContainer = styled.div<ApplicationListContainerProps>`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    position: fixed;
    top: 0;
    display: grid;
    /* align-items: center; */
    grid-template-columns: .7fr .3fr;
    right: 0;
    left: 0;
    z-index: 10;
    transition: transform 1s ease-in-out;
    transform: ${({ openApplicationList }) => openApplicationList ? 'translateX(0)' : 'translateX(100%)'};

    .influencerProfile{
        width: 100%;
        height: 100%;
        background-color: #fff;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1000;
    }

    .ApplicationListheader {
        display: flex;
        flex-direction: row;
        box-shadow: 0;
        padding: 1rem;
        /* border:1px solid #eee; */
        justify-content: space-between;

        h1 {
            font-size: 1.1rem;
            font-weight: bold;
            margin: 0;
        }
    }

    .emptyApplication{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90%;
    }

    .applicationList {
        display: flex;
        flex-direction: column;
        align-self: center;
        overflow-y: auto;
        height: 100%;
        width: 100%;
        /* border: 1px solid #eee; */

        .applicationCard{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 1rem;
            padding: 1rem;
            background-color: #fff;
            box-shadow: 0px 0px 5px 0px #0000000f;
            cursor: pointer;

            &:hover{
                box-shadow: 0px 0px 5px 0px #0000000f;
                background-color: #eee;
            }

         
            .applicationInfo{
                display: flex;
                gap: 1rem;
                .applicationImage{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: #44d3f7;
                    overflow: hidden;

                    img{
                        width: 5rem;
                        height: 5rem;
                        object-fit: cover;
                        border-radius: 5px;
                    }
                }
                .applicationDetails{
                    display: flex;
                    flex-direction: column;
                    h3{
                        font-size: 1rem;
                        font-weight: bold;
                        margin: 0;
                    }
                    p{
                        font-size: 0.9rem;
                        color: #6b6b6b;
                        margin: 0;
                    }
                }
            }
            
            .applicationStatus{
                display: flex;
                align-items: center;
                background-color: #eee;
                padding: 0.1rem 1rem;
                p{
                    font-size: .8rem;
                    /* font-weight: bold; */
                    margin: 0;
                }
            }
        }
        .approvedApplications{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 1rem;
            padding: 1rem;
            background-color: #848982;
            color: #fff;
            box-shadow: 0px 0px 5px 0px #0000000f;
            cursor: pointer;

            &:hover{
                box-shadow: 0px 0px 5px 0px #0000000f;
                background-color: #6f716c;
            }

            .applicationInfo{
                display: flex;
                gap: 1rem;
                .applicationImage{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: #44d3f7;
                    overflow: hidden;

                    img{
                        width: 5rem;
                        height: 5rem;
                        object-fit: cover;
                        border-radius: 5px;
                    }
                }
                .applicationDetails{
                    display: flex;
                    flex-direction: column;
                    h3{
                        font-size: 1rem;
                        font-weight: bold;
                        margin: 0;
                    }
                    p{
                        font-size: 0.9rem;
                        color: #e5e2e2;
                        margin: 0;
                    }
                }
            }
            .applicationStatus{
                display: flex;
                align-items: center;
                background-color: #87ba76;
                padding: 0.1rem 1rem;
                p{
                    font-size: .8rem;
                    /* font-weight: bold; */
                    margin: 0;
                }
            }
        }
    }
`;