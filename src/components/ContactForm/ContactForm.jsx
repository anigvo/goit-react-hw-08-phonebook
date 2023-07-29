import { Form } from './ContactForm.styled';
import { useState } from 'react';
import { selectIsAdding } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const isAdding = useSelector(selectIsAdding);
  const contacts = useSelector(selectContacts);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact(name, number);
    setName('');
    setNumber('');
  };

  const handleAddContact = (contactName, contactNumber) => {
    const newContact = {
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

  return (
      <Form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          label="Name"
          type="text"
          name="name"
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
          value={name}
        />
        <TextField
          label="Number"
          type="tel"
          name="number"
          pattern="^(\+?[0-9.\(\)\-\s]*)$"
          title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
          value={number}
        />
        <Button type="submit" disabled={isAdding} variant="contained">
          {isAdding ? <>Adding...</> : <>Add contact</>}
        </Button>
      </Form>
  );
}
