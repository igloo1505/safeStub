// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumNFLTeamNameFilterObjectSchema } from '../internals';

export const EnumNFLTeamNameFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumNFLTeamNameFilterObjectSchema])
});
