// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const EventCreateManyInputObjectSchema = Yup.object({
    id: Yup.number(),  arenaId: Yup.number().required(),  amenitiesId: Yup.number().required(),  date: Yup.date().required(),  title: Yup.string().required(),  description: Yup.string().required()
});
