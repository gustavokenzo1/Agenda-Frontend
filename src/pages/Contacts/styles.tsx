import styled from "styled-components";

export const ContactsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactsGreeting = styled.div`
  width: 80%;
  text-align: center;
  margin-top: 3rem;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin-top: 2rem;
    font-size: 1.2rem;

    td,
    th {
      padding: 1rem;
      border: 1px solid #ccc;
    }
  }
`;
