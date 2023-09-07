import * as Yup from 'yup';
import { EventWhereInputObjectSchema, EventOrderByWithRelationInputObjectSchema, EventWhereUniqueInputObjectSchema } from './internals';
import { EventScalarFieldEnumSchema } from './internals'

export const EventFindFirstSchema = Yup.object({ where: EventWhereInputObjectSchema, orderBy: EventOrderByWithRelationInputObjectSchema, cursor: EventWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(EventScalarFieldEnumSchema) }).required()