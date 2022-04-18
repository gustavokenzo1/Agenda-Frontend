import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modal";
import { useAuth } from "../../context/User";
import { Button, FormContainer, FormInput } from "../../styles";

export const Login = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const [modal, setModal] = useState(false);
  const [warning, setWarning] = useState("");

  const { Login } = useAuth();

  const handleCredentials = async (credentials: any) => {
    if (!credentials.email || !credentials.password) {
      setWarning("Por-favor, certifique-se de que preencheu todos os campos!");
      setModal(true);
    } else {
      try {
        await Login(credentials.email, credentials.password);
        navigate("/");
      } catch (error: any) {
        setWarning(`${error.message}`);
        setModal(true);
      }
    }
  };

  return (
    <FormContainer>
      <AnimatePresence exitBeforeEnter={true}>
        {modal && <Modal warning={warning} setModal={setModal} />}
      </AnimatePresence>
      <h1>Faça login na sua conta para começar a usar a agenda!</h1>
      <form
        onSubmit={handleSubmit((credentials) => handleCredentials(credentials))}
      >
        <FormInput>
          <label>Email:</label>
          <input
            autoComplete="off"
            type="email"
            {...register("email")}
            placeholder="Seu email"
          />
        </FormInput>
        <FormInput>
          <label>Senha:</label>
          <input
            autoComplete="off"
            type="password"
            {...register("password")}
            placeholder="Sua senha"
          />
        </FormInput>
        <Button type="submit">Entrar</Button>
        <Button onClick={() => navigate("/")}>Voltar</Button>
      </form>
    </FormContainer>
  );
};
