import styled from "styled-components";

interface InfluencersSearchContainerProps {
    opencreateForm: boolean;
  }

export const CampaignFormContainer = styled.div<InfluencersSearchContainerProps>` 
    position: fixed;
    background-color: #fff;
    right: 0;
    top: 0;
    width: 30%;
    bottom: 0;
    overflow-y: auto;
    box-shadow: 0 6px 17px rgba(0, 0, 0, 0.07);
    transform: translateX(${(props) => (props.opencreateForm ? "0%" : "100%")});
    transition: transform 0.3s ease-in-out;
    padding-bottom: 1rem;
    z-index: 1000;



    form{
        >*{
            padding:.3rem 1rem;

            textarea{
                height: 100px;
                resize: none;
            }
        }
        .header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            border-bottom: 1px solid #7a7171;
            background-color: #e44d4d;
            color: #fff;
            position: sticky;
            top: 0;


            *:first-child{
                font-size: 2rem;
                cursor: pointer;
                color: #e44d4d;
                background-color: #fff;

                &:hover{
                    color: #ffffff;
                    background-color: #e44d4d;
                }
            }
        }
    }
`