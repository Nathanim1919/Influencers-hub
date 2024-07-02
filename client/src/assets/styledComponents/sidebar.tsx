import styled from "styled-components";
// for path ../components/

export const SidebarContainer = styled.div`
 display: grid;
 align-items: start;
 border-right: 1px solid #ddd;
 background-color: #fff;
 box-shadow: 0 6px 17px rgba(0, 0, 0, 0.119);
 position: relative;
 z-index: 10;

 .logo{
    display: flex;
    width: 60px;

    img{
      width: 100%;
    }
  
 }

>div{
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: width 0.4s ease-in-out;
  padding: 1rem 0;
  gap: 1rem;
  justify-content: start;
  position: sticky;
  left: 0;
  overflow: hidden;

  a.active {
    border-right: 5px solid red;
  }

  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: width 1s ease-in-out;
    padding: 0.4rem 1rem;

    &:hover {
      background-color: #3464f4;
      color: white;
      box-shadow: 0 6px 17px rgba(0, 0, 0, 0.07);
      transition: all 0.2s ease-in-out;
    }
  }
}

.downlikns{
  .profilePic{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
  }
}
`;
