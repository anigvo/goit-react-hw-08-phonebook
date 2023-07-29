import styled from '@emotion/styled';

import Button from '@mui/material/Button';

const Li = styled.li`
  color: #444444;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:last-child {
    margin-bottom: 0px;
  }
`;

const DeleteButton = styled(Button)`
  &:hover {
    background: #1976d2;
    color: white;
  }
`;

export { Li, DeleteButton };
