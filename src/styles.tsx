import styled from "styled-components";

export const FormContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    font-size: 1.5rem;
  }

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    margin-top: 2rem;
    background-color: #222;
    padding: 2rem;
    border-radius: 0.5rem;
  }

  @media (max-width: 768px) {
    > h1 {
      font-size: 1rem;
    }

    > form {
      width: 80%;
      padding: 0.5rem;
    }
  }
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 4rem;
  background-color: #222;
  width: 80%;
  justify-content: space-between;

  > label {
    background-color: #222;
  }

  > input {
    height: 2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border: none;
    border-radius: 5px;
    width: 50%;

    &:focus {
      outline: 2px solid #3374ff;
    }
  }

  @media (max-width: 768px) {
    > label {
      font-size: 0.8rem;
    }

    > input {
      height: 1.5rem;
      margin-left: 10px;
    }
  }
`;

export const Button = styled.button`
  height: 2.3rem;
  width: 50%;
  margin-top: 1rem;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 900;
  transition: 0.3s;
  border: 1px solid #3374ff;

  &:hover {
    background-color: #3374ff;
  }
`;
