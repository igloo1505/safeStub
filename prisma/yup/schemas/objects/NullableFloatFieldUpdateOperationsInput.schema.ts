// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const NullableFloatFieldUpdateOperationsInputObjectSchema = Yup.object({
    set: Yup.mixed().oneOfSchemas([Yup.number()]),  increment: Yup.number(),  decrement: Yup.number(),  multiply: Yup.number(),  divide: Yup.number()
});
