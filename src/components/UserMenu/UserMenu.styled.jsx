import styled from '@emotion/styled';
import { Button } from '@mui/material';

const UserMenuWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  color: #1976d2;
`;

const Text = styled.p`
font-size: 20px;`;

const LogoutButton = styled(Button)`
height: 35px;`;

export { UserMenuWrapper, Span, Text, LogoutButton };
