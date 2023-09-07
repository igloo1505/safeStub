import * as Yup from 'yup';
import { TicketWhereUniqueInputObjectSchema } from './internals'

export const TicketDeleteOneSchema = Yup.object({ where: TicketWhereUniqueInputObjectSchema  }).required()