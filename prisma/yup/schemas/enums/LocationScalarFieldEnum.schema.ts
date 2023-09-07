import * as Yup from 'yup';

export const LocationScalarFieldEnumSchema = Yup.mixed().oneOf(["id","uniqueKey","street","zip","city","cityId","state","lat","long","country","userId"])