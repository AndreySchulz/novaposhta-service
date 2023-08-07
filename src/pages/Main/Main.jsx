import SearchInput from '../../components/SearchInput/SearchInput';
import TtnHistory from '../../components/TtnHistory/TtnHistory';
import TtnTable from '../../components/TtnTable/TtnTable';

const Main = () => {
  return (
    <>
      <SearchInput />
      <div>
      <TtnTable />
      <TtnHistory/>
      </div>
     
    </>
  );
};

export default Main;
