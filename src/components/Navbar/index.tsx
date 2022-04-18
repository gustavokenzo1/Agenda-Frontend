import { NavBarContainer } from "./styles";

export const NavBar = () => {
  return (
    <NavBarContainer>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/contacts">Contatos</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </NavBarContainer>
  );
};
