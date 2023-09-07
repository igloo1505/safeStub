import * as Yup from 'yup';
import { TicketUpdateInputObjectSchema, TicketWhereUniqueInputObjectSchema } from './internals'

export const TicketUpdateOneSchema = Yup.object({ data: TicketUpdateInputObjectSchema, where: TicketWhereUniqueInputObjectSchema  }).required()