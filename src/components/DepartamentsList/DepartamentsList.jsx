import { useSelector } from 'react-redux';
import { selectDepartmentsList } from '../../store/ttn/ttn-selectors';
import {
  DepartamentBox,
  DepartamentItem,
  DropDownBox,
} from './DepartamentsList.styled';
import { useState } from 'react';

import 'leaflet/dist/leaflet.css';
import Map from '../Map/Map';

const DepartamentsList = () => {
  const departaments = useSelector(selectDepartmentsList);
  const [activeIndex, setActiveIndex] = useState(null);

  const dropDownClick = idx => {
    setActiveIndex(prevIndex => (prevIndex === idx ? null : idx));
  };

  return (
    <DepartamentBox>
      {departaments?.map(dep => (
        <DepartamentItem key={dep.SiteKey}>
          <h2
            onClick={() => {
              dropDownClick(dep.SiteKey);
            }}
          >
            {dep.Description} ↓
          </h2>
          <DropDownBox
            className={activeIndex === dep.SiteKey ? 'active' : null}
          >
            <Map lat={dep.Latitude} long={dep.Longitude} name={dep.Description}/>
          </DropDownBox>
        </DepartamentItem>
      ))}
    </DepartamentBox>
  );
};

export default DepartamentsList;
