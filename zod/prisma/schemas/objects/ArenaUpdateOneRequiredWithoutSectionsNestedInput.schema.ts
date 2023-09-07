import { z } from 'zod';
import { ArenaCreateWithoutSectionsInputObjectSchema } from './ArenaCreateWithoutSectionsInput.schema';
import { ArenaUncheckedCreateWithoutSectionsInputObjectSchema } from './ArenaUncheckedCreateWithoutSectionsInput.schema';
import { ArenaCreateOrConnectWithoutSectionsInputObjectSchema } from './ArenaCreateOrConnectWithoutSectionsInput.schema';
import { ArenaUpsertWithoutSectionsInputObjectSchema } from './ArenaUpsertWithoutSectionsInput.schema';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';
import { ArenaUpdateWithoutSectionsInputObjectSchema } from './ArenaUpdateWithoutSectionsInput.schema';
import { ArenaUncheckedUpdateWithoutSectionsInputObjectSchema } from './ArenaUncheckedUpdateWithoutSectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUpdateOneRequiredWithoutSectionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArenaCreateWithoutSectionsInputObjectSchema),
          z.lazy(() => ArenaUncheckedCreateWithoutSectionsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ArenaCreateOrConnectWithoutSectionsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ArenaUpsertWithoutSectionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ArenaWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ArenaUpdateWithoutSectionsInputObjectSchema),
          z.lazy(() => ArenaUncheckedUpdateWithoutSectionsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ArenaUpdateOneRequiredWithoutSectionsNestedInputObjectSchema =
  Schema;
