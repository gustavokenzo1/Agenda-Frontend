import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/User";
import api from "../../services/api";
import { Button, FormInput } from "../../styles";
import { Modal } from "../Modal";
import { ModalBackground } from "../Modal/styles";
import { ContactForm } from "./styles";

export const Form = ({ setShowForm, setContacts, contacts }: any) => {
  const { register, handleSubmit } = useForm();

  const [modal, setModal] = useState(false);
  const [warning, setWarning] = useState("");

  const { user } = useAuth();

  const handleCredentials = async (credentials: any) => {
    if (
      !credentials.name ||
      !credentials.surname ||
      !credentials.email ||
      !credentials.cellphone
    ) {
      setWarning("Por-favor, certifique-se de que preencheu todos os campos!");
      setModal(true);
    } else {
      try {
        await api.post(
          `/contact`,
          {
            user: user!.user._id,
            name: credentials.name,
            surname: credentials.surname,
            email: credentials.email,
            phone: credentials.cellphone,
          },
          {
            headers: {
              user_id: user!.user._id,
            },
          }
        );
        setContacts([...contacts, credentials]);
        setShowForm(false);
      } catch (error: any) {
        setWarning(`${error.message}`);
        setModal(true);
      }
    }
  };

  return (
    <ModalBackground
      style={{
        top: 0,
        backgroundColor: "#00000045",
      }}
    >
      <ContactForm
        as={motion.div}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        Informações Sobre o Contato
        <AnimatePresence exitBeforeEnter={true}>
          {modal && <Modal warning={warning} setModal={setModal} />}
        </AnimatePresence>
        <form
          onSubmit={handleSubmit((credentials) =>
            handleCredentials(credentials)
          )}
        >
          <FormInput>
            <label>Nome:</label>
            <input
              autoComplete="off"
              {...register("name")}
              placeholder="Nome"
            />
          </FormInput>
          <FormInput>
            <label>Sobrenome:</label>
            <input
              autoComplete="off"
              {...register("surname")}
              placeholder="Sobrenome"
            />
          </FormInput>
          <FormInput>
            <label>Email:</label>
            <input
              autoComplete="off"
              type="email"
              {...register("email")}
              placeholder="Email"
            />
          </FormInput>
          <FormInput>
            <label>Telefone:</label>
            <input
              autoComplete="off"
              {...register("phone")}
              placeholder="Telefone"
            />
          </FormInput>
          <Button style={{ width: "50%" }}>Adicionar</Button>
        </form>
        <Button
          onClick={() => {
            setShowForm(false);
          }}
        >
          Cancelar
        </Button>
      </ContactForm>
    </ModalBackground>
  );
};
