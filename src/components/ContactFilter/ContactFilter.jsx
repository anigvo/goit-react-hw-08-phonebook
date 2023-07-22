import { Label, Input } from './ContactFilter.styled';
import { selectFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export function ContactFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const filterInput = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" value={filter} onChange={filterInput} />
    </Label>
  );
}
