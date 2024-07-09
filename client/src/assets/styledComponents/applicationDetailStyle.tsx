import styled from "styled-components";

export const ApplicationDetailContainer = styled.div`
   

   .ApplicationDetailheader{
    display: flex;
    justify-content: space-between;
    align-items: center;
    >div{
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-bottom: 1px solid #eee;
        padding: 1rem;


        h1{
            font-size: 1.4rem;
            font-weight: bold;
        }
        }


        >*{
            margin: 0;
        }
   }

   .moreInfo{
       padding: 2rem;
    h2{
        font-weight: bold;
    }
   }


   .btns{
    display: flex;
    align-items: center;
    justify-content: center;


    button{
        padding: 0.4rem 1.2rem;
        background-color: green;
        color: #fff;
        font-weight: 200;


        &:hover{
            background-color: #a8e1a8;
        }
    }
   }

   button:nth-child(2){
    background-color: red;


    &:hover{
        background-color: #e58989;
    }
   }
   button:nth-child(3){
    background-color: blue;


    &:hover{
        background-color: #8282e5;
    }
   }
`;