import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
    justify-content: space-around;
    align-items: center;
    background-color :#fff;
    padding:1rem .5rem;
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 1px solid #ddd;

    h1{
        font-size: 20px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 5px;
        

        span{
            color: #3bb4ff;
            border-bottom: 2px solid #3bb4ff;
        }
    }


    .links{
        display: flex;
        gap: 1rem;
        a{
            text-decoration: none;
            color: #333;
            font-size: 14px;
            font-weight: 200;
            padding: 0.5rem 1rem;
            &:hover{
                color: #5da2fb;
            }
        }

        a:last-child{
            border-radius: 5px;
            background-color: #3bb4ff;
            color: #fff;
            font-weight: 500;
        }
    }
`;