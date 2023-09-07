// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { TeamCreateWithoutLogosInputObjectSchema } from '../internals';;
import { TeamUncheckedCreateWithoutLogosInputObjectSchema } from '../internals';;
import { TeamCreateOrConnectWithoutLogosInputObjectSchema } from '../internals';;
import { TeamUpsertWithoutLogosInputObjectSchema } from '../internals';;
import { TeamWhereUniqueInputObjectSchema } from '../internals';;
import { TeamUpdateWithoutLogosInputObjectSchema } from '../internals';;
import { TeamUncheckedUpdateWithoutLogosInputObjectSchema } from '../internals';

export const TeamUpdateOneWithoutLogosNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([TeamCreateWithoutLogosInputObjectSchema,
TeamUncheckedCreateWithoutLogosInputObjectSchema]),  connectOrCreate: TeamCreateOrConnectWithoutLogosInputObjectSchema,  upsert: TeamUpsertWithoutLogosInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: TeamWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([TeamUpdateWithoutLogosInputObjectSchema,
TeamUncheckedUpdateWithoutLogosInputObjectSchema])
});
