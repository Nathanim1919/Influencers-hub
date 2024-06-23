import styled from "styled-components";
// for path ../components/

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  width: 100%;
  transition: width .4s ease-in-out;
  height: 100vh;
  padding: 1rem 0;
  gap: 1rem;
  justify-content: start;
  position: sticky;
  left: 0;


  a.active{
   border-right: 5px solid red;
  }

  a{
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: width 2s ease-in-out;
    padding: 0.4rem 1rem;

    &:hover{
      background-color: #3464f4;
      color: white;
      box-shadow: 0 6px 17px rgba(0,0,0,.07);
      transform: translateX(10px);
      border-radius: 10px;
      transition: all .2s ease-in-out;

    }

    span{
      display: none;
      transition: display .3s ease-in-out;
    }
  }

  &:hover{
    width: 100%;

    a{
      span{
        display: grid;
      }
    }
  }

  >a.logout{
    justify-self: end;
    /* background-color: red; */
    margin-top: 13rem;
  }
`;