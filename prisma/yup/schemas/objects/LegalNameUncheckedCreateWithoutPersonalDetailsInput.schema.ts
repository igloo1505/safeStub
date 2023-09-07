// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const LegalNameUncheckedCreateWithoutPersonalDetailsInputObjectSchema = Yup.object({
    first: Yup.string().required(),  middle: Yup.mixed().oneOfSchemas([Yup.string()]),  last: Yup.string().required()
});
