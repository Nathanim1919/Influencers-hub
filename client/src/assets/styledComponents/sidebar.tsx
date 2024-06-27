import styled from "styled-components";
// for path ../components/

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  height: 100%;
  background-color: aliceblue;
  transition: width 0.4s ease-in-out;
  height: 100vh;
  padding: 1rem 0;
  gap: 1rem;
  justify-content: start;
  position: sticky;
  left: 0;

  a.active {
    border-right: 5px solid red;
  }

  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: width 2s ease-in-out;
    padding: 0.4rem 1rem;

    &:hover {
      background-color: #3464f4;
      color: white;
      box-shadow: 0 6px 17px rgba(0, 0, 0, 0.07);
      transition: all 0.2s ease-in-out;
    }
  }

  > a.logout {
    justify-self: end;
    /* background-color: red; */
    margin-top: 13rem;
  }
`;
