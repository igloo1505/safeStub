// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const EventCreateManyArenaInputObjectSchema = Yup.object({
    id: Yup.number(),  amenitiesId: Yup.number().required(),  date: Yup.date().required(),  title: Yup.string().required(),  description: Yup.string().required()
});
