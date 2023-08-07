import { Puff } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

const Loader = () => {
  return (
   
      <LoaderBox>
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#ff392e"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </LoaderBox>
    
  );
};

export default Loader;
