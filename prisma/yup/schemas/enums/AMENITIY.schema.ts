import * as Yup from 'yup';

export const AMENITIYSchema = Yup.mixed().oneOf(["total","partial","none"])