// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaUpdateWithoutSectionsInputObjectSchema } from '../internals';;
import { ArenaUncheckedUpdateWithoutSectionsInputObjectSchema } from '../internals';;
import { ArenaCreateWithoutSectionsInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutSectionsInputObjectSchema } from '../internals';

export const ArenaUpsertWithoutSectionsInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([ArenaUpdateWithoutSectionsInputObjectSchema,
ArenaUncheckedUpdateWithoutSectionsInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutSectionsInputObjectSchema,
ArenaUncheckedCreateWithoutSectionsInputObjectSchema])
});
