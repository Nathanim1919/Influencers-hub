import styled from "styled-components";


export const ApplicationContainer = styled.div`
    background-color: #f9f9f9;
    .modal {
        padding: 1rem;
        .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    
        h1 {
            font-size: 1rem;
            font-weight: bold;
            margin: 0;
        }
    
        p {
            font-size: 0.9rem;
            color: #6b6b6b;
            margin: 0;
        }
    
        .close {
            cursor: pointer;
            color: #000;
    
            &:hover {
            color: #ddd;
            }
        }
        }
    
        .campaign {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
        .imag {
            img {
            width: 5rem;
            height: 5rem;
            object-fit: cover;
            border-radius: 5px;
            }
        }
    
        .campaignInfo {
            h2 {
            font-size: 1rem;
            font-weight: bold;
            margin: 0;
            }
    
            p {
            font-size: 0.9rem;
            color: #6b6b6b;
            margin: 0;
            }
        }
        }
    
        .form {
        margin-top: 1rem;
        form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
    
            .input {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
    
            label {
                font-size: 0.9rem;
                color: #6b6b6b;
            }
    
            input,
            textarea {
                padding: 0.5rem;
                border-radius: 5px;
                border: 1px solid #ddd;
            }
    
            textarea {
                resize: none;
            }
            }
    
            button {
            padding: 0.5rem;
            border-radius: 5px;
            border: none;
            background-color: #000;
            color: #fff;
            cursor: pointer;
            }
        }
        }
    }
    `;