import styled from "styled-components";

export const RecentPostsContainer = styled.div`
    display: grid;
    grid-template-columns: .2fr .5fr .3fr;
    margin: 0 auto;
    width: 100%;
    overflow: hidden;

    h1{
        font-size: 1rem;
        font-weight: bold;
        background-color: #fff;
        padding: 0.4rem 1rem;
        position: sticky;
        top: 0;

    }

    .activeConversations{
        overflow-y: auto;
        height: 80vh;

        .actives{
            display: grid;
            gap: 1rem;
            margin-top: 1rem;
        }

        >*{
            margin: 0;
        }

        .conversation{
            display: flex;
            align-items: center;
            padding:.3rem 1rem;
            border-bottom: 1px solid #f7f4f4;

            .profile{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                overflow: hidden;
                margin-right: 1rem;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .info{
                h2{
                    font-size: 1rem;
                    font-weight: bold;
                }
                p{
                    font-size: .8rem;
                    color: #999;
                }
            }
        }
    }

    .conversationBody{
        .activeBuddy{
            display: grid;
            grid-template-columns: .2fr .8fr;
            gap: 1rem;
            background-color: #fff;
            padding: 0.5rem 1rem;

            .image{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                overflow: hidden;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;

                }
            }

            .info{
                h2{
                    font-size: 1rem;
                    font-weight: bold;
                }
                p{
                    font-size: .8rem;
                    color: #999;
                }
            }
        }

        .conversationBody{
            display: grid;
            grid-template-columns: .2fr .8fr;
            gap: 1rem;
            background-color: #fff;
            padding: 0.5rem 1rem;

            .image{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                overflow: hidden;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;

                }
            }

            .info{
                h2{
                    font-size: 1rem;
                    font-weight: bold;
                }
                p{
                    font-size: .8rem;
                    color: #999;
                }
            }
        }
    }
`;