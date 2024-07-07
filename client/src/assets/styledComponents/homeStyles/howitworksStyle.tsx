import styled from "styled-components";

export const HowItWorksContainer = styled.div`
  width: 80%;
margin: 0 auto;
  .how-it-works-header{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;

    h1{
      font-size: 2rem;
      color: #051d51;
      font-weight: 600;
      margin: 0;
    }

    p{
      font-size: 1rem;
      color: #333;
      margin: 0;
    }
  }

  .how-it-works-grid{
    display: grid;
    gap: 2rem;
    
    .how-it-works-step{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        place-items: center;
        width: 100%;

        .content{
            padding: 1rem;
            h1{
                font-size: 1.5rem;
                font-weight: 600;
                color: #333;
                margin-bottom: 1rem;
            }

            h2{
                font-size: 2rem;
                color: #99aa63;
            }

            p{
                font-size: 1rem;
                color: #6b6b6b;
            }
        }
    }
  }
`;
