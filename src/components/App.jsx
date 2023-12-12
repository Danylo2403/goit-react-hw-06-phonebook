import { AppLayout } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <AppLayout>
      <h1>Phonebook</h1>
      <ContactForm />
      <ContactList />
    </AppLayout>
  );
};