import PropTypes from 'prop-types';
import { Li, Button } from './ContactItem.styled';
import { selectisDeleting } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { useState } from 'react';

export function ContactItem({ item }) {
  const isDeleting = useSelector(selectisDeleting);
  // const ID = useSelector(selectContactId);
  const [id, setID] = useState(null);

  const dispatch = useDispatch();

  const handleDelete = () => {
    setID(item.id);
    dispatch(deleteContact(item.id));
  };

  return (
    <Li key={item.id}>
      <span>
        {item.name}: {item.phone}
      </span>
      <Button type="button" onClick={handleDelete} disabled={isDeleting}>
        {item.id === id && isDeleting ? <>Deleting...</> : <>Delete</>}
      </Button>
    </Li>
  );
}

ContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
