import { ErrorMessage, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { fetchDepartments } from '../../store/ttn/ttn-operation';
import { useState } from 'react';
import { selectDepartmentsError, selectDepartmentsList, } from '../../store/ttn/ttn-selectors';
import { ErrorMsg, FieldForm, FormBox, FormBtn, NavigateBtn } from './SearchDepartament.styled';

const schema = yup.object().shape({
  cityName: yup
    .string()
    .min(3, 'Мінімум 3 символа')
    .max(30, 'Максимум 25 символів')
    .matches(
      /^[А-ЩЬЮЯҐЄІЇ][а-щьюяґєії']*(-[А-ЩЬЮЯҐЄІЇ][а-щьюяґєії']+)*( [А-ЩЬЮЯҐЄІЇ][а-щьюяґєії']+)*$/,
      'Введіть назву літерами українського алфавіту з великої букви'
    )
    .required("Поле обов'язкове для заповнення"),
});

const SearchDepartament = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const DepartamentList = useSelector(selectDepartmentsList);
  let error = useSelector(selectDepartmentsError);

  const initialValues = {
    cityName: '',
  };

  const handleSubmit = values => {
    dispatch(fetchDepartments({ city: values.cityName, page: page }));
  };
console.log(DepartamentList.length);
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ resetForm, handleSubmit, handleChange }) => {
          return (
            <FormBox>
              <div>
              <FieldForm
                type="text"
                name="cityName"
                placeholder="Введіть назву міста"
                onChange={handleChange}
              />
              <ErrorMessage name="cityName" component={ErrorMsg} />
              {error ? <ErrorMsg>Невірна назва міста</ErrorMsg> : null}
              <FormBtn type="submit" onSubmit={handleSubmit}>
                Шукати відділення
              </FormBtn>
              </div>
              <NavigateBtn>
              {page >= 2 ? (
                <FormBtn
                  type="button"
                  onClick={() => {
                    setPage(prev => prev - 1);
                    handleSubmit();
                  }}
                >
                  Назад
                </FormBtn>
              ) : null}
              {DepartamentList.length > 1 && DepartamentList.length <=30  ? (
                <FormBtn
                  type="button"
                  onClick={() => {
                    setPage(prev => prev + 1);
                    handleSubmit();
                  }}
                >
                  Наступна
                </FormBtn>
              ) : null}
              </NavigateBtn>
            </FormBox>
          );
        }}
      </Formik>
    </>
  );
};

export default SearchDepartament;
