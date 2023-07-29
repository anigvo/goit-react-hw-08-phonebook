import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const H1 = styled.h1`
  font-size: 28px;
  margin: 0;
  font-weight: normal;
  margin-bottom: 10px;
`;

const H2 = styled.h2`
  font-size: 26px;
  margin: 0;
  font-weight: normal;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Container = styled.div`
  text-align: center;
  padding: 40px;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
`;

const Wrapper = styled.div`
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 20px;
  border: 2px solid rgba(25, 118, 210, 0.5);
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const LayoutDiv = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px 40px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 18px;
`;


const LinkButton = styled(Button)`
  padding: 10px 16px;
  font-size: 20px;
  color: currentColor;
  &:hover {
    color: #1976d2;
  }
`;

export { H1, H2, Container, Wrapper, LayoutDiv, LinkButton };
