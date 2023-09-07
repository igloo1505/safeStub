// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const PersonalDetailsWhereUniqueInputObjectSchema = Yup.object({
    id: Yup.number(),  userId: Yup.number()
});
