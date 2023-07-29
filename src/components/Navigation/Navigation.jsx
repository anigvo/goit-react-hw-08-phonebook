import { useAuth } from 'hooks/useAuth';
import { LinkButton } from 'components/App.styled';
import { NavLink } from 'react-router-dom';
import { NavWrapper } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavWrapper>
      <LinkButton component={NavLink} to="/">
        Home
      </LinkButton>

      {isLoggedIn && (
        <LinkButton component={NavLink} to="/contacts">
          Contacts
        </LinkButton>
      )}
    </NavWrapper>
  );
};
