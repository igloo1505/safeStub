// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const ColorsCreateWithoutTeamInputObjectSchema = Yup.object({
    primary: Yup.string().required(),  secondary: Yup.mixed().oneOfSchemas([Yup.string()])
});
