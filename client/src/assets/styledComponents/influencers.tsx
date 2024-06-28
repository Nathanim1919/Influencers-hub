import styled from "styled-components";

export const InfluencersContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    /* padding-top: 1rem; */
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    background-color: #f9f6f6;
    overflow-y: auto;
    height: 100vh;
    gap: 1rem;
    
    .header{
        display: flex;
        justify-content: space-between;
        padding:1rem 2rem;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 100;
        gap: 1rem;
        border-bottom: 1px solid #eee;
        background-color: #ffffff;
        box-shadow: 0 0 10px #0000001f;

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

        button{
            padding: .4rem 1rem;
            background-color: #f04444;
            border: 1px solid #ddd;
            color: #fff;
            border-radius: 5px;
            cursor: pointer;


            &:hover{
                background-color: #fc9191;
                color: #fff;
            }
        }
    }
   
   .topCatagories{
         display: grid;
         gap: 1rem;
         padding: 1rem;
         background-color: #f9f6f6;

            h2{
                font-size: 1.5rem;
                margin: 0;
                font-weight: bold;
            }
   }

   .listOfGatagoris{
         display: grid;
         grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
         gap: 1rem;
         padding: 1rem;
         background-color: #f9f6f6;


         .influncerCatagorie{
            position: relative;
            max-height: 300px;
            overflow: hidden;
            border-radius: 10px;
            cursor: pointer;

            img{
                position: relative;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .content{
                position: absolute;
                background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.8), rgba(0,0,0,1));
                width: 100%;
                padding: 1rem;
                bottom: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                top: 0;
                left: 0;
                width: 100%;
                color: #fff;


                h3{
                    font-size: 1.5rem;
                    margin: 0;
                }

                p{
                    font-size: 1rem;
                    margin: 0;
                    color: #cecaca;
                }
            }
         }
   }

   .topSocialMediasCatagories{
         display: grid;
         gap: 4rem;
         padding: 1rem;
         background-color: #f9f6f6;
         width: 80%;
            margin: 0 auto;

            h2{
                font-size: 1.5rem;
                place-self: center;
                margin: 0;
                font-weight: bold;
            }

            .lists{
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 1rem;
                

                .instagram, .toktok, .twitter{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding:0 1rem;
                    background-color: #fff;
                    border-radius: 10px;
                    cursor: pointer;
                    border: 1px solid #eee;


                    &:hover{
                        background: linear-gradient(67deg, #2151ff, #a6b6ff);
                        color: #fff;
                        box-shadow: 0 8px 28px rgba(0, 0, 0, 0.2);

                        .info{
                            h1{
                                color: #fff;
                            }

                            p{
                                color: #fff;
                            }
                        }
                    }

                    .image{
                        width: 10rem;
                        height: 10rem;
                        border-radius: 50%;
                        overflow: hidden;
                        position: relative;
                        top: -3rem;


                        img{
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
                        }
                    }

                    .info{
                        position: relative;
                        top: -3rem;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        h1{
                            font-size: 2rem;
                            font-weight: bold;
                            margin: 0;
                        }
                        p{
                            font-size: 1rem;
                            color: #999;
                            margin: 0;
                        }
                    }
                }
            }
   }
`;