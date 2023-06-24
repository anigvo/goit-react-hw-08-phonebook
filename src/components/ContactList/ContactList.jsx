import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { Ul } from './ContactList.styled';

export function ContactList({ deleteContact, filterContacts }) {
  const handleDelete = contactId => {
    deleteContact(contactId);
  };
  return (
    <Ul>
      {filterContacts.map(item => (
        <ContactItem item={item} key={item.id} onDelete={handleDelete} />
      ))}
    </Ul>
  );
}

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
