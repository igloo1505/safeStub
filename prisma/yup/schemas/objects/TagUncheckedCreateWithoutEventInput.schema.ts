// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const TagUncheckedCreateWithoutEventInputObjectSchema = Yup.object({
    id: Yup.number(),  value: Yup.string().required()
});
