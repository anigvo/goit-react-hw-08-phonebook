import { LinkButton } from 'components/App.styled';
import { NavLink } from 'react-router-dom';
import { ButtonWrapper } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <ButtonWrapper>
      <LinkButton component={NavLink} to="/register">
        Register
      </LinkButton>
      <LinkButton component={NavLink} to="/login">
        Log In
      </LinkButton>
    </ButtonWrapper>
  );
};
