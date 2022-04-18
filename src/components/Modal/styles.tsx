import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 1;
  width: 25%;
  height: 25%;
  background-color: #121214;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 1rem;

  > button {
    margin-bottom: 0;
  }
`;
export const ModalBackground = styled.div`
  position: absolute;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: #3333337d;
  display: flex;
  justify-content: center;
  align-items: center;
`;
