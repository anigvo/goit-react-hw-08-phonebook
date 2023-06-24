import PropTypes from 'prop-types';
import { Li, Button } from './ContactItem.styled';

export function ContactItem({ item, onDelete }) {
  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <Li key={item.id}>
      {item.name}: {item.number}
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Li>
  );
}

ContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
