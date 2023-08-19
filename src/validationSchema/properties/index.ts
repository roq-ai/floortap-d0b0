import * as yup from 'yup';

export const propertyValidationSchema = yup.object().shape({
  title: yup.string().required(),
  location: yup.string().required(),
  price: yup.number().integer().required(),
  size: yup.number().integer().required(),
  seller_id: yup.string().nullable(),
  buyer_id: yup.string().nullable(),
  agent_id: yup.string().nullable(),
});
