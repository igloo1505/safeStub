// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const ColorsUncheckedCreateWithoutTeamInputObjectSchema = Yup.object({
    id: Yup.number(),  primary: Yup.string().required(),  secondary: Yup.mixed().oneOfSchemas([Yup.string()])
});
