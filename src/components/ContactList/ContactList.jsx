import { Contact } from 'components/Contact/Contact';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(item => {
    return item.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <h2>Contacts</h2>
      <Filter />
      <ul>
        {filteredContacts.map(item => (
          <Contact
            key={item.id}
            id={item.id}
            name={item.name}
            number={item.number}
          />
        ))}
      </ul>
    </>
  );
};