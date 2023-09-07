// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { LogoCreaterelInputObjectSchema } from '../internals';

export const LogoUncheckedCreateWithoutTeamInputObjectSchema = Yup.object({
    id: Yup.number(),  path: Yup.string().required(),  width: Yup.number().required(),  height: Yup.number().required(),  rel: Yup.mixed().oneOfSchemas([LogoCreaterelInputObjectSchema,
Yup.array().of(Yup.string())]),  url: Yup.mixed().oneOfSchemas([Yup.string()])
});
