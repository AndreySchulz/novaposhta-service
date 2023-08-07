import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';

import { fetchDepartments } from '../../store/ttn/ttn-operation';
import { useState } from 'react';
import { selectDepartmentsList } from '../../store/ttn/ttn-selectors';

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
  const DepartamentList = useSelector(selectDepartmentsList)

  const initialValues = {
    cityName: '',
  };

  const handleSubmit = values => {
    console.log(values.cityName);
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
            <Form>
              <Field
                type="text"
                name="cityName"
                placeholder="Введіть назву міста"
                onChange={handleChange}
              />
              <ErrorMessage name="cityName" component="div" />
              <button type="submit" onSubmit={handleSubmit}>
                Шукати відділення
              </button>
              {page >=2 ?<button
                type="button"
                onClick={() => {
                  setPage(prev => prev -1);
                  handleSubmit();
                }}
              >
                Назад
              </button> :null}
             {DepartamentList.length >= 1 ?  <button
                type="button"
                onClick={() => {
                  setPage(prev => prev + 1);
                  handleSubmit();
                }}
              >
                Наступна
              </button>: null}
              
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default SearchDepartament;
