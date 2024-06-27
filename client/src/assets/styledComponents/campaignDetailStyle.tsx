import styled from "styled-components";

export const CampaignDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1rem;
    background-color: #fff;
    overflow-y: auto;
    height: 100vh;

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
        .budget {
        font-size: 1rem;
        color: #6b6b6b;
        }
    }
    .description {
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