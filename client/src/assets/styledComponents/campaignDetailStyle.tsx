import styled from "styled-components";

export const CampaignDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1rem;
    background-color: #fff;
    overflow-y: auto;
    height: 100vh;
    animation: animate 0.2s ease-in-out;

    @keyframes animate {
        0% {
            transform: translateY(30%);
        }
        100% {
            transform: translateY(0);
        }
    }

    >*{
        padding: 1rem;
    }
    .header {
        position: sticky;
        top: 0;
        background-color: #ffffff;
        backdrop-filter: blur(10px);
        
        box-shadow: 0 3px 23px rgba(0,0,0,0.1);
        h1 {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0;
        }
        p {
        font-size: 1rem;
        color: #6b6b6b;
        margin: 0;
        }
    }
    .moreInfo {
        display: flex;
        justify-content: space-between;
        .date {
        p {
            font-size: 1rem;
            color: #6b6b6b;
            margin: 0;
        }
        }
       .editCampaign{
        display: flex;
        /* flex-direction: column; */
        align-items: center;
        gap: 1rem;
        justify-content: center;
        button {
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            background-color: #eae3e3;
            color: #333;
            display: flex;
            align-items: center;
        }
        p {
            font-size: 1rem;
            color: #ffffff;
            margin: 0;
            background-color: #c3d09c;
            padding: 0.3rem 1rem;
            border-radius: 1rem;
        }
        
       }
    }
    .description {
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
        font-size: 1.2rem;
        font-weight: bold;
        }
        p {
        font-size: 1rem;
        color: #6b6b6b;
        }
    }
    .btns {
        display: flex;
        gap: 1rem;
        button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        }
        .apply {
        background-color: #709a5c;
        color: white;
        }
        .saveForPreview {
        background-color: #f2f2f2;
        color: #6b6b6b;
        }
    }
    `;