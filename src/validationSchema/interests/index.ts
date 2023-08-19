import * as yup from 'yup';

export const interestValidationSchema = yup.object().shape({
  date: yup.date().required(),
  property_id: yup.string().nullable().required(),
  customer_id: yup.string().nullable().required(),
});
