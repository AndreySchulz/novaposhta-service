import { useSelector } from 'react-redux';
import { selectInfo } from '../../store/ttn/ttn-selectors';

const TtnTable = () => {
  const { Status, StatusCode, WarehouseSender, WarehouseRecipient } =
    useSelector(selectInfo);

  return (
    <table>
      <tbody>
      <tr>
        <td>Статус доставки:</td>
        <td>{Status}</td>
      </tr>
      {StatusCode !== '3' ? (
        <>
          <tr>
            <td>Відправлено:</td>
            <td>{WarehouseSender}</td>
          </tr>
          <tr>
            <td>Отримано:</td>
            <td>{WarehouseRecipient}</td>
          </tr>
        </>
      ) : null}
      </tbody>
    </table>
  );
};

export default TtnTable;
