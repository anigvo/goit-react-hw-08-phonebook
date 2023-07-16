import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { H1, H2, Container, Wrapper } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { setFilter } from 'redux/filterSlice';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleAddContact = (contactName, contactNumber) => {
    const contactId = nanoid();
    const newContact = {
      id: contactId,
      name: contactName,
      number: contactNumber,
    };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === contactName.toLowerCase()
      )
    ) {
      alert(`${contactName} is already in contacts.`);
      return;
    }
    dispatch(addContact(newContact));
  };

  const filter = useSelector(getFilter);
  const filterInput = event => {
    dispatch(setFilter(event.currentTarget.value));
  };
  const normalizeFilter = filter.toLocaleLowerCase();
  const filterContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizeFilter)
  );

  return (
    <Container>
      <H1>Phonebook</H1>
      <ContactForm handleAddContact={handleAddContact} />
      <H2>Contacts</H2>
      <Wrapper>
        <ContactFilter filter={filter} filterInput={filterInput} />
        <ContactList filterContacts={filterContacts} />
      </Wrapper>
    </Container>
  );
}
