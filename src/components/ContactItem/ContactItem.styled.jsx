import styled from '@emotion/styled';

const Li = styled.li`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:last-child {
    margin-bottom: 0px;
  }
`;

const Button = styled.button`
cursor: pointer;
`;

export { Li, Button };
