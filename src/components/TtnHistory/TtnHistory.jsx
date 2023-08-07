import { useDispatch, useSelector } from 'react-redux';
import { selectNumbersList } from '../../store/ttn/ttn-selectors';
import {
  ClearHistoryBtn,
  TtnHistoriList,
  TtnHistoryBox,
  TtnHistoryBoxHeader,
  TtnItem,
} from './TtnHistory.styled';
import { clearRequestHistory } from '../../store/ttn/ttn-slice';
import { fetchInfo } from '../../store/ttn/ttn-operation';

const TtnHistory = () => {
  const ttnList = useSelector(selectNumbersList);

  const dispatch = useDispatch();

  const SelectTtn = number => {
    dispatch(fetchInfo(number));
  };

  const cliarHisoryTtn = () => {
    dispatch(clearRequestHistory());
  };

  return (
    <TtnHistoryBox>
      <TtnHistoryBoxHeader>Історія</TtnHistoryBoxHeader>
      {ttnList.length >= 1 ? (
        <>
          <TtnHistoriList>
            {ttnList.map(ttn => (
              <TtnItem key={ttn} onClick={() => SelectTtn(ttn)}>{ttn}</TtnItem>
            ))}
          </TtnHistoriList>
          <ClearHistoryBtn type="button" onClick={cliarHisoryTtn}>
            Очистити історію пошуку
          </ClearHistoryBtn>
        </>
      ) : null}
    </TtnHistoryBox>
  );
};

export default TtnHistory;
