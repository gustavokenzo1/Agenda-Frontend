import styled from "styled-components";

export const NavBarContainer = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #33703b;
  color: #fff;
  position: absolute;
  
  > ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 1.3rem;
    
    > li > a {
      color: #fff;
      text-decoration: none;
      transition: 0.3s;
      font-size: 1.2rem;
      font-weight: 900;
      
      &:hover {
        color: #71ff71;
      }
    }
  }
`;
