import { Oval } from 'react-loader-spinner';
import { LoaderWrapper } from './Refreshing.styled';

export const Refreshing = () => {
  return (
    <LoaderWrapper>
      <Oval
        height={160}
        width={160}
        color="#1976d2"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#1976d2"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </LoaderWrapper>
  );
};
