import { ContactItem } from 'components/ContactItem/ContactItem';
import { Ul } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

export function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <Ul>
      {filteredContacts.map(item => (
        <ContactItem
          item={item}
          key={item.id}
        />
      ))}
    </Ul>
  );
}
