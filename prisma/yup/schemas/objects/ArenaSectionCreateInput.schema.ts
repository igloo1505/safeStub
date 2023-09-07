// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateNestedOneWithoutSectionsInputObjectSchema } from '../internals';;
import { TicketCreateNestedManyWithoutArenaSectionInputObjectSchema } from '../internals';

export const ArenaSectionCreateInputObjectSchema = Yup.object({
    name: Yup.string().required(),  Arena: ArenaCreateNestedOneWithoutSectionsInputObjectSchema,  Ticket: TicketCreateNestedManyWithoutArenaSectionInputObjectSchema
});
