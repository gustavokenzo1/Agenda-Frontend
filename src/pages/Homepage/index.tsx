import { useNavigate } from "react-router-dom";
import { Button, ButtonContainer, HomepageContainer, Title } from "./styles";

export const Homepage = () => {
  const navigate = useNavigate();

  return (
    <HomepageContainer>
      <Title>Agenda de Contatos</Title>
      <ButtonContainer>
        <Button onClick={() => navigate("/login")}>Login</Button>
        <Button onClick={() => navigate("/register")}>Criar Conta</Button>
      </ButtonContainer>
    </HomepageContainer>
  );
};
