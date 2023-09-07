import * as Yup from 'yup';

export const SportsSchema = Yup.mixed().oneOf(["Basketball","Football","Soccer","MMA","Motorsports"])