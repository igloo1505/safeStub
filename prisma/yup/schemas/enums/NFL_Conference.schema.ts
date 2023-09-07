import * as Yup from 'yup';

export const NFL_ConferenceSchema = Yup.mixed().oneOf(["NFC","AFC"])