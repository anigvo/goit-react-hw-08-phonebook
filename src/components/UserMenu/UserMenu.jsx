import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { UserMenuWrapper, Span, Text, LogoutButton } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrapper>
      <Text>
        Welcome, <Span>{user.name}</Span>
      </Text>

      <LogoutButton
        type="button"
        variant="outlined"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </LogoutButton>
    </UserMenuWrapper>
  );
};
