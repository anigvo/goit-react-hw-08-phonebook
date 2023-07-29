import { selectFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { InputFilter } from './ContactFilter.styled';
export function ContactFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const filterInput = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <InputFilter
      label="Find contacts by name"
      type="text"
      name="filter"
      value={filter}
      onChange={filterInput}
      width={400}
    />
  );
}
