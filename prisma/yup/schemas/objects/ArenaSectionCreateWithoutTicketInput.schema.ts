// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateNestedOneWithoutSectionsInputObjectSchema } from '../internals';

export const ArenaSectionCreateWithoutTicketInputObjectSchema = Yup.object({
    name: Yup.string().required(),  Arena: ArenaCreateNestedOneWithoutSectionsInputObjectSchema
});
