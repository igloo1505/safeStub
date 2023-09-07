import * as Yup from 'yup';
import { EventWhereUniqueInputObjectSchema } from './internals'

export const EventFindUniqueSchema = Yup.object({ where: EventWhereUniqueInputObjectSchema }).required()