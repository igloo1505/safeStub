import * as Yup from 'yup';
import { TicketGroupUpdateManyMutationInputObjectSchema, TicketGroupWhereInputObjectSchema } from './internals'

export const TicketGroupUpdateManySchema = Yup.object({ data: TicketGroupUpdateManyMutationInputObjectSchema, where: TicketGroupWhereInputObjectSchema  }).required()