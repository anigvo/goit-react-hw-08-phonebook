import PropTypes from 'prop-types';
import { Li, Button } from './ContactItem.styled';
import { selectContactId, selectisDeleting } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export function ContactItem({ item, handleSetContactID }) {
  const isDeleting = useSelector(selectisDeleting);
  const ID = useSelector(selectContactId);

  const dispatch = useDispatch();

  const handleDelete = () => {
    handleSetContactID(item.id);
    dispatch(deleteContact(item.id));
  };

  return (
    <Li key={item.id}>
      <span>{item.name}: {item.phone}</span>
      <Button type="button" onClick={handleDelete} disabled={isDeleting}>
        {item.id === ID && isDeleting ? <>Deleting...</> : <>Delete</>}
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
  handleSetContactID: PropTypes.func.isRequired,
};
