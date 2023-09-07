import * as Yup from 'yup';

export const LeaguesSchema = Yup.mixed().oneOf(["NFL","NCAA"])