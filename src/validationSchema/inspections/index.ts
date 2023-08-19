import * as yup from 'yup';

export const inspectionValidationSchema = yup.object().shape({
  report: yup.string().required(),
  date: yup.date().required(),
  property_id: yup.string().nullable().required(),
  inspector_id: yup.string().nullable().required(),
});
