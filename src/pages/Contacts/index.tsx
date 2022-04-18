import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Form } from "../../components/Form";
import { useAuth } from "../../context/User";
import api from "../../services/api";
import { Button } from "../Homepage/styles";
import { ContactsContainer, ContactsGreeting } from "./styles";

export const Contacts = () => {
  const { user } = useAuth();
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    async function getContacts() {
      const response = await api.get(`/contact/${user!.user._id}`, {
        headers: {
          user_id: user!.user._id,
        },
      });

      setContacts(response.data.contacts);
    }

    getContacts();
  }, [user]);

  return (
    <ContactsContainer>
      <ContactsGreeting>
        Olá {user!.user.name}, aqui está sua agenda de contatos!
        <Button onClick={() => setShowForm(true)}>Adicionar Contato</Button>
        <AnimatePresence exitBeforeEnter={true}>
          {showForm && (
            <Form
              setShowForm={setShowForm}
              setContacts={setContacts}
              contacts={contacts}
            />
          )}
        </AnimatePresence>
        {contacts.length === 0 ? (
          <p>Você ainda não possui contatos :(</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Telefone</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact: any) => (
                <tr key={contact._id}>
                  <td>
                    {contact.name} {contact.surname}{" "}
                  </td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </ContactsGreeting>
    </ContactsContainer>
  );
};
