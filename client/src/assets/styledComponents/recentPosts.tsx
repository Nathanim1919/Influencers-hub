import styled from "styled-components";

export const RecentPostsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding-top: 1rem;
    margin: 0 auto;
    width: 100%;

    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .editIcon{
            background-color: #ffffff;
            padding: .5rem;
            border-radius: 50%;
            box-shadow: 0 4px 21px rgba(0,0,0,.05);
            font-size: 1.4rem;
        }
    h1{
        /* text-align: center; */
        font-size: 1.3rem;
        font-weight: bold;
    }
}

    .posts{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;

        .post{
            display: grid;
            grid-template-columns: 1fr;
            background-color: #ffffff;
            border: 1px solid #ddd;

            .image{
                position: relative;
                background-color: red;
            }

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                position: relative;
                
            }

            .socialIcon{
                width: 50px;
                height: auto;
                object-fit: cover;
                position: absolute;
                top: 70%;
                right: 10%;
                background-color: white;
                box-shadow: 0 4px 21px rgba(0,0,0,.3);
                border-radius: 5px;
            }

            .postInfo{

                h2{
                    /* text-align: center; */
                    padding: 1rem;
                }
               
                .statics{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    border-top: 1px solid #eee;
                    padding: 1rem .5rem;

                    >*{
                        display: flex;
                        gap: .5rem;
                        align-items: center;
                    }
                }
            }
        }
    }
`