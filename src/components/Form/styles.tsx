import styled from "styled-components";

export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #222;
  font-size: 1rem;
  padding: 2rem;
  border-radius: 5px;
  width: 40%;

  > form {
    background: #222;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }

  > form > * {
    width: 100%;
    align-self: center;
  }
`;
