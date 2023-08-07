import SearchInput from '../../components/SearchInput/SearchInput';
import TtnHistory from '../../components/TtnHistory/TtnHistory';
import TtnTable from '../../components/TtnTable/TtnTable';
import { MainInfo } from './Main.styled';

const Main = () => {
  return (
    <>
      <SearchInput />
      <MainInfo>
        <TtnTable />
        <TtnHistory />
      </MainInfo>
    </>
  );
};

export default Main;
