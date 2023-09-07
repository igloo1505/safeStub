import * as Yup from 'yup';
import { TicketWhereInputObjectSchema } from './internals'

export const TicketDeleteManySchema = Yup.object({ TicketWhereInputObjectSchema  }).required()