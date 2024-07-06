import styled from "styled-components";


interface CampaignContainerStyle  {
  isSidebar: boolean;
}

export const CampaignListContainer = styled.div<CampaignContainerStyle>`
  display: grid;
  grid-template-columns: ${({ isSidebar }) => isSidebar ? "1fr .3fr" : "1fr"};
  overflow: hidden;
  height: 100vh;

  .lists {
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
    padding-bottom: 3rem;

    .header {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      border-bottom: 1px solid #ddd;
      box-shadow:0 5px 23px rgba(0,0,0,.1);

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
      height: 90vh;
      padding:1rem;
      padding-bottom: 3rem;
    }
  }
`;
