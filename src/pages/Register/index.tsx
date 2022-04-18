import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modal";
import api from "../../services/api";
import { Button, FormContainer, FormInput } from "../../styles";

export const Register = () => {
  const { register, handleSubmit } = useForm();
  const [modal, setModal] = useState(false);
  const [warning, setWarning] = useState("");

  const navigate = useNavigate();

  const handleCredentials = async (credentials: any) => {
    if (
      !credentials.name ||
      !credentials.password ||
      !credentials.email ||
      !credentials.confirmPassword
    ) {
      setWarning("Por-favor, certifique-se de que preencheu todos os campos!");
      setModal(true);
    } else if (credentials.password !== credentials.confirmPassword) {
      setWarning("As senhas não coincidem!");
      setModal(true);
    } else {
      try {
        await api.post("/user", {
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        });
      } catch (error) {
        setWarning(`${error}`);
        setModal(true);
      }
    }
  };

  return (
    <FormContainer>
      <AnimatePresence exitBeforeEnter={true}>
        {modal && <Modal warning={warning} setModal={setModal} />}
      </AnimatePresence>
      <h1>Crie uma conta para começar a usar a aplicação</h1>
      <form
        onSubmit={handleSubmit((credentials) => handleCredentials(credentials))}
      >
        <FormInput>
          <label>Nome:</label>
          <input
            autoComplete="off"
            {...register("name")}
            placeholder="Seu nome"
          />
        </FormInput>
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
        <FormInput>
          <label>Confirme sua Senha:</label>
          <input
            autoComplete="off"
            type="password"
            {...register("confirmPassword")}
            placeholder="Sua senha novamente"
          />
        </FormInput>
        <Button type="submit">Registrar</Button>
        <Button onClick={() => navigate("/")}>Voltar</Button>
      </form>
    </FormContainer>
  );
};
