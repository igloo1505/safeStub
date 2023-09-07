// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaScalarWhereInputObjectSchema } from '../internals';;
import { ArenaUpdateManyMutationInputObjectSchema } from '../internals';;
import { ArenaUncheckedUpdateManyWithoutArenaInputObjectSchema } from '../internals';

export const ArenaUpdateManyWithWhereWithoutLocationInputObjectSchema = Yup.object({
    where: ArenaScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([ArenaUpdateManyMutationInputObjectSchema,
ArenaUncheckedUpdateManyWithoutArenaInputObjectSchema])
});
