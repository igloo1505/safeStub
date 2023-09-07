import * as Yup from 'yup';

export const CATEGORYSchema = Yup.mixed().oneOf(["Music","Sports","Comedy"])