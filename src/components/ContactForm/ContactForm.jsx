import { Form, Label, Input, AddContactButton } from './ContactForm.styled';
import { useState } from 'react';
import { selectIsAdding } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const isAdding = useSelector(selectIsAdding);
  const contacts = useSelector(selectContacts);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact(name, phone);
    setName('');
    setPhone('');
  };

  const handleAddContact = (contactName, contactNumber) => {
    const contactId = nanoid();
    const newContact = {
      id: contactId,
      name: contactName,
      phone: contactNumber,
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
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
          value={name}
        />
      </Label>

      <Label>
        Phone
        <Input
          type="tel"
          name="phone"
          pattern="^(\+?[0-9.\(\)\-\s]*)$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
          value={phone}
        />
      </Label>

      <AddContactButton type="submit" disabled={isAdding}>
        {isAdding ? <>Adding...</> : <>Add contact</>}
      </AddContactButton>
    </Form>
  );
}
