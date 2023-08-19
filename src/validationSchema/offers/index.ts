import * as yup from 'yup';

export const offerValidationSchema = yup.object().shape({
  price: yup.number().integer().required(),
  status: yup.string().required(),
  date: yup.date().required(),
  property_id: yup.string().nullable().required(),
  buyer_id: yup.string().nullable().required(),
});
