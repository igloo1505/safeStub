// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateWithoutSectionsInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutSectionsInputObjectSchema } from '../internals';;
import { ArenaCreateOrConnectWithoutSectionsInputObjectSchema } from '../internals';;
import { ArenaUpsertWithoutSectionsInputObjectSchema } from '../internals';;
import { ArenaWhereUniqueInputObjectSchema } from '../internals';;
import { ArenaUpdateWithoutSectionsInputObjectSchema } from '../internals';;
import { ArenaUncheckedUpdateWithoutSectionsInputObjectSchema } from '../internals';

export const ArenaUpdateOneRequiredWithoutSectionsNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutSectionsInputObjectSchema,
ArenaUncheckedCreateWithoutSectionsInputObjectSchema]),  connectOrCreate: ArenaCreateOrConnectWithoutSectionsInputObjectSchema,  upsert: ArenaUpsertWithoutSectionsInputObjectSchema,  connect: ArenaWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ArenaUpdateWithoutSectionsInputObjectSchema,
ArenaUncheckedUpdateWithoutSectionsInputObjectSchema])
});
