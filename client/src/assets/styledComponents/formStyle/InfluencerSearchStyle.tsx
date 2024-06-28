import styled from "styled-components";

interface InfluencersSearchContainerProps {
  openSearch: boolean;
}

export const InfluencersSearchContainer = styled.div<InfluencersSearchContainerProps>`
  position: fixed;
  z-index: 1000;
  background-color: white;
  right: 0;
  top: 0;
  bottom: 0;
  width: 30%;
  transform: translateX(${(props) => (props.openSearch ? "0%" : "100%")});
  overflow-y: auto;
  box-shadow: 0 10px 45px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;
  padding-bottom: 1rem;

  .inputContainer{
    display: grid;
    gap: 1rem;
  }

  >*{
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
    box-shadow: none;
    background-color: #f45959;
    color: white;

    *:nth-child(1) {
      font-size: 2rem;
      font-weight: bold;
      margin: 0;
      cursor: pointer;
      position: relative;
      z-index: 100;

      &:hover {
        color: #f04444;
      }
    }
  }
`;