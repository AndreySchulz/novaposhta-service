import * as yup from "yup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, useFormikContext, Form, Field, ErrorMessage } from "formik";
import {
  selectError,
  selectSelectedNumber,
} from "../../store/ttn/ttn-selectors";
import { fetchInfo } from "../../store/ttn/ttn-operation";

const schema = yup.object().shape({
  ttnNumber: yup
    .string()
    .matches(/^\d{14}$/, "Введіть 14 цифр")
    .required("Поле обов'язкове для заповнення"),
});

const initialValues = {
  ttnNumber: "",
};
const TtnInput = () => {
  const { setFieldValue } = useFormikContext();

  const ttnSelectedNumber = useSelector(selectSelectedNumber);

  useEffect(() => {
    setFieldValue("ttnNumber", ttnSelectedNumber);
  }, [ttnSelectedNumber, setFieldValue]);
  return (
    <>
      <Field type="text" name="ttnNumber" placeholder="Номер накладної" />
      <ErrorMessage name="ttnNumber" component="div" />
    </>
  );
};

const SearchInput = () => {
  let error = useSelector(selectError);
  const dispatch = useDispatch();

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
      <Form>
        <div>
          <TtnInput />
          {error ?<p>Невірний номер ТТН</p> : null}
        </div>
        <button type="submit">Отримати статус</button>
      </Form>
    </Formik>
  );
};

export default SearchInput;
