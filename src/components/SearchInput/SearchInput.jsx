import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { selectError } from '../../store/ttn/ttn-selectors';
import { fetchInfo } from '../../store/ttn/ttn-operation';
import { ErrorMsg, FieldForm, FormBox, FormBtn } from './SearchInput.styled';

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
    dispatch(fetchInfo(values.ttnNumber));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={submitFetch}
    >
      {({ resetForm, handleSubmit, handleChange }) => {
        return (
          <FormBox>
            <FieldForm
              type="text"
              name="ttnNumber"
              placeholder="Номер накладної"
              onChange={handleChange}
            />
            <ErrorMessage name="ttnNumber" component={ErrorMsg} />
            {error ? <ErrorMsg>Невірний номер ТТН</ErrorMsg> : null}

            <FormBtn type="submit" onSubmit={handleSubmit}>
              Отримати статус
            </FormBtn>
          </FormBox>
        );
      }}
    </Formik>
  );
};

export default SearchInput;
