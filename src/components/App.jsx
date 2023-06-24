import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { H1, H2, Container, Wrapper } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contactName, contactNumber) => {
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
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const filterInput = event => {
    setFilter(event.currentTarget.value);
  };

  const normalizeFilter = filter.toLocaleLowerCase();
  const filterContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizeFilter)
  );

  return (
    <Container>
      <H1>Phonebook</H1>
      <ContactForm addContact={addContact} />
      <H2>Contacts</H2>
      <Wrapper>
        <ContactFilter filter={filter} filterInput={filterInput} />
        <ContactList
          filterContacts={filterContacts}
          deleteContact={deleteContact}
        />
      </Wrapper>
    </Container>
  );
}
