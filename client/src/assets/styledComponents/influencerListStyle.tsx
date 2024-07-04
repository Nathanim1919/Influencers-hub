import styled from "styled-components";


export const InfluencerListContainer = styled.div`
    .topheader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        background-color: #fff;
        position: sticky;
        top: 0;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        padding: 1rem;
        h1{
            font-size: 24px;
            font-weight: 600;
        }
    }

    .influncerLists{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        width: 90%;
        margin: 0 auto;
        

        .Influncer{
            border-radius: 10px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .header{
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: #fff;
                padding: 1rem;
                p{
                    font-size: 14px;
                    color: #333;
                }

                p:nth-child(2){
                    background-color: #eee;
                    padding: 0.3rem 0.5rem;
                    border-radius: 20px;
                    font-size: .7rem;
                }
            }
            .body{
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                align-items: center;
              
                .image{
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    overflow: hidden;
                    background-color: #ddd;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
                .info{
                    padding: 1rem;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    h1{
                        font-size: 15px;
                        font-weight: 600;
                    }
                    .niches{
                        display: flex;
                        gap: 10px;
                        p{
                            font-size: 10px;
                            color: #333;
                            padding: 0.3rem 1rem;
                            border-radius: 20px;
                            background-color: #91edc0;
                        }
                    }
                }

                .btns{
                    display: flex;
                    justify-content: space-around;
                    gap: 10px;
                    background-color: #fff;
                    margin-top: 1rem;
                    width: 100%;
                    padding: 0.5rem 0;
                    button{
                        padding: 6px 10px;
                        border: none;
                        border-radius: 5px;
                        font-size: 14px;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        gap: .4rem;
                        cursor: pointer;

                        &:hover{
                            background-color: #eee;
                        }
                    }

                    .profile{
                        color: orange;
                    }

                    .message{
                        color: green;
                    }

                    .save{
                        color: blue;
                    }
                }
            }
        }
    }
`