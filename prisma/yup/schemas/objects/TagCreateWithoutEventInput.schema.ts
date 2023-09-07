// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const TagCreateWithoutEventInputObjectSchema = Yup.object({
    value: Yup.string().required()
});
