import { useSelector } from 'react-redux';
import { selectDepartmentsList } from '../../store/ttn/ttn-selectors';
import { DropDownBox } from './DepartamentsList.styled';
import { useState } from 'react';

const DepartamentsList = () => {
  const departaments = useSelector(selectDepartmentsList);
  const [activeIndex, setActiveIndex] = useState(null);

  const dropDownClick = idx => {
    setActiveIndex(prevIndex => (prevIndex === idx ? null : idx));
  };

  return (
    <ul>
      {departaments?.map(dep => 
        <li key={dep.SiteKey}>
          <h2
            onClick={() => {
              dropDownClick(dep.SiteKey);
            }}
          >
            {dep.Description}
          </h2>
          <DropDownBox className={activeIndex === dep.SiteKey ? 'active' : null}>
            <p>{dep.Latitude}</p>
            <p>{dep.Longitude}</p>
          </DropDownBox>
        </li>
      )}
    </ul>
  );
};

export default DepartamentsList;
