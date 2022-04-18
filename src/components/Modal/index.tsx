import { motion } from "framer-motion";
import { Button } from "../../pages/Homepage/styles";
import { ModalBackground, ModalContainer } from "./styles";

export const Modal = ({ warning, setModal }: any) => {
  return (
    <ModalBackground onClick={() => setModal(false)}>
        <ModalContainer
          as={motion.div}
          initial={{ top: "-100%", opacity: 0 }}
          animate={{ top: "30%", opacity: 1 }}
          exit={{ top: "-100%", opacity: 0 }}
        >
          {warning}
          <Button>Confirmar</Button>
        </ModalContainer>
    </ModalBackground>
  );
};
