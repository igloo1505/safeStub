import * as Yup from 'yup';

export const CountrySchema = Yup.mixed().oneOf(["US","GER","UK"])