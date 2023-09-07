import * as Yup from 'yup';

export const NFL_DivisionSchema = Yup.mixed().oneOf(["North","West","East","South"])