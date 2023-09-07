import * as Yup from 'yup';

export const PARKINGSchema = Yup.mixed().oneOf(["limited","valet","withTicket","offstreet"])