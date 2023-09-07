// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaCreateWithoutSectionsInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutSectionsInputObjectSchema } from '../internals';

export const ArenaCreateOrConnectWithoutSectionsInputObjectSchema = Yup.object({
    where: ArenaWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutSectionsInputObjectSchema,
ArenaUncheckedCreateWithoutSectionsInputObjectSchema])
});
