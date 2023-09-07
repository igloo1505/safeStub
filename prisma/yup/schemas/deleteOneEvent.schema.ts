import * as Yup from 'yup';
import { EventWhereUniqueInputObjectSchema } from './internals'

export const EventDeleteOneSchema = Yup.object({ where: EventWhereUniqueInputObjectSchema  }).required()