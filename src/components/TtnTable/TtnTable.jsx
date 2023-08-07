import { useSelector } from 'react-redux';
import { selectInfo, selectIsLoading } from '../../store/ttn/ttn-selectors';
import Loader from '../Loader/Loader';
import { TableBox, TableTdHeader, TableTr } from './TtnTable.styled';

const TtnTable = () => {
  const { Status, StatusCode, WarehouseSender, WarehouseRecipient } =
    useSelector(selectInfo);

  const isLoading = useSelector(selectIsLoading);
  return (
    <TableBox>
      {isLoading ? (
        <Loader />
      ) : (
        <table>
          <tbody>
            <TableTr>
              <TableTdHeader>Статус доставки:</TableTdHeader>
              <td>{Status}</td>
            </TableTr>
            {StatusCode !== '3' ? (
              <>
                <TableTr>
                  <TableTdHeader>Відправлено:</TableTdHeader>
                  <td>{WarehouseSender}</td>
                </TableTr>
                <TableTr>
                  <TableTdHeader>Отримано:</TableTdHeader>
                  <td>{WarehouseRecipient}</td>
                </TableTr>
              </>
            ) : null}
          </tbody>
        </table>
      )}
    </TableBox>
  );
};

export default TtnTable;
