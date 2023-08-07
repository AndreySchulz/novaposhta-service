import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { selectError } from '../../store/ttn/ttn-selectors';
import { fetchInfo } from '../../store/ttn/ttn-operation';

const schema = yup.object().shape({
  ttnNumber: yup
    .string()
    .matches(/^\d{14}$/, 'Введіть 14 цифр')
    .required("Поле обов'язкове для заповнення"),
});

const SearchInput = () => {
  let error = useSelector(selectError);
  const dispatch = useDispatch();

  const initialValues = {
    ttnNumber: '',
  };

  const submitFetch = (values, { resetForm }) => {
    resetForm();
    dispatch(fetchInfo(values.ttnNumber));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={submitFetch}
    >
      {({ resetForm, handleSubmit, handleChange, errors }) => {
        return (
          <Form>
            <Field
              type="text"
              name="ttnNumber"
              placeholder="Номер накладної"
              onChange={handleChange}
            />
            <ErrorMessage name="ttnNumber" component="p" />
            {error ? <p>Невірний номер ТТН</p> : null}

            <button type="submit" onSubmit={handleSubmit}>
              Отримати статус
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SearchInput;
