import styled from "styled-components";

export const CampaignListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr .3fr;
  /* padding: 2rem; */
  overflow: hidden;
  /* gap: 1rem; */
  /* height: 90vh; */

  .lists {
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
    padding: 1rem;

    .header {
      display: flex;
      flex-direction: column;
      /* padding: 1rem; */

      h1 {
        font-size: 1.5rem;
        font-weight: bold;
      }

      p {
        font-size: 0.9rem;
        color: #6b6b6b;
      }
    }

    > * {
      margin: 0;
    }

    .campaignLists {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
      overflow-y: auto;
      height: 80vh;
      padding:2rem 1rem;
    }
  }
`;
