// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ArenaCreateWithoutSectionsInputObjectSchema } from '../internals';;
import { ArenaUncheckedCreateWithoutSectionsInputObjectSchema } from '../internals';;
import { ArenaCreateOrConnectWithoutSectionsInputObjectSchema } from '../internals';;
import { ArenaWhereUniqueInputObjectSchema } from '../internals';

export const ArenaCreateNestedOneWithoutSectionsInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ArenaCreateWithoutSectionsInputObjectSchema,
ArenaUncheckedCreateWithoutSectionsInputObjectSchema]),  connectOrCreate: ArenaCreateOrConnectWithoutSectionsInputObjectSchema,  connect: ArenaWhereUniqueInputObjectSchema
});
