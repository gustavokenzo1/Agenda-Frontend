import styled from "styled-components";

export const HomepageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 10rem;
  height: 2.2rem;
  margin: 2rem;
  border-radius: 5px;
  border: 1px solid #5784e6;
  background: transparent;
  color: #fff;

  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #5784e6;
  }
`;
