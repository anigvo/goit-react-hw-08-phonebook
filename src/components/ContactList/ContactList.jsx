import { ContactItem } from 'components/ContactItem/ContactItem';
import { Ul } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setContactID } from 'redux/contactsSlice';
import { selectFilteredContacts } from 'redux/selectors';

export function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const handleSetContactID = contactId => {
    dispatch(setContactID(contactId));
  };

  return (
    <Ul>
      {filteredContacts.map(item => (
        <ContactItem
          item={item}
          key={item.id}
          handleSetContactID={handleSetContactID}
        />
      ))}
    </Ul>
  );
}
