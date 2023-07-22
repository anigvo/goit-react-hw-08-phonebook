import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { H1, H2, Container, Wrapper } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectisFetching, selectError } from 'redux/selectors';

export function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector(selectisFetching);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <H1>Phonebook</H1>
      <ContactForm />
      <H2>Contacts</H2>
      <Wrapper>
        {isFetching && !error ? (
          <b>Request in progress...</b>
        ) : (
          <>
            <ContactFilter/>
            <ContactList/>
          </>
        )}
      </Wrapper>
    </Container>
  );
}
