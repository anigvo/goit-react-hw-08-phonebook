import PropTypes from 'prop-types';
import { Li, DeleteButton } from './ContactItem.styled';
import { selectisDeleting } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { useState } from 'react';

export function ContactItem({ item }) {
  const isDeleting = useSelector(selectisDeleting);
  const [id, setID] = useState(null);

  const dispatch = useDispatch();

  const handleDelete = () => {
    setID(item.id);
    dispatch(deleteContact(item.id));
  };

  return (
    <Li key={item.id}>
      <span>
        {item.name}: {item.number}
      </span>
      <DeleteButton
        variant="outlined"
        type="button"
        onClick={handleDelete}
        disabled={isDeleting}
      >
        {item.id === id && isDeleting ? <>Deleting...</> : <>Delete</>}
      </DeleteButton>
    </Li>
  );
}

ContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
