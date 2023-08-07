import { useSelector } from 'react-redux';
import { selectInfo, selectIsLoading } from '../../store/ttn/ttn-selectors';
import Loader from '../Loader/Loader';
import { TableBox, TableTr } from './TtnTable.styled';

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
              <td>Статус доставки:</td>
              <td>{Status}</td>
            </TableTr>
            {StatusCode !== '3' ? (
              <>
                <TableTr>
                  <td>Відправлено:</td>
                  <td>{WarehouseSender}</td>
                </TableTr>
                <TableTr>
                  <td>Отримано:</td>
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
