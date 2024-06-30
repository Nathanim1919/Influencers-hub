import styled from "styled-components";


export const RegisterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width:100%;
  gap: 1rem;

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
  }

  h1{
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
  }

  button{
    padding: 0.3rem 2rem;
    justify-self: end;
    border-radius: 5px;
    border: 2px solid #fc9494;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    cursor: pointer;
    align-self: flex-end;
  }
`;