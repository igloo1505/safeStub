import * as Yup from 'yup';
import { TicketWhereUniqueInputObjectSchema } from './internals'

export const TicketFindUniqueSchema = Yup.object({ where: TicketWhereUniqueInputObjectSchema }).required()