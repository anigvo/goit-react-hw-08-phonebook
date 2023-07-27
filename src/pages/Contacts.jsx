import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { H1, H2, Container, Wrapper } from 'components/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectisFetching, selectError } from 'redux/selectors';

const Contacts = () => {
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
            <ContactFilter />
            <ContactList />
          </>
        )}
      </Wrapper>
    </Container>
  );
}

export default Contacts
