import PropTypes from 'prop-types';
import { Label, Input } from './ContactFilter.styled';

export function ContactFilter({ filter, filterInput }) {
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" value={filter} onChange={filterInput} />
    </Label>
  );
}

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterInput: PropTypes.func.isRequired,
};