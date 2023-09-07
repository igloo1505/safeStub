import * as Yup from 'yup';
import { TicketUpdateManyMutationInputObjectSchema, TicketWhereInputObjectSchema } from './internals'

export const TicketUpdateManySchema = Yup.object({ data: TicketUpdateManyMutationInputObjectSchema, where: TicketWhereInputObjectSchema  }).required()