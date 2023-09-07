import { z } from 'zod';
import { ArenaCreateWithoutSectionsInputObjectSchema } from './ArenaCreateWithoutSectionsInput.schema';
import { ArenaUncheckedCreateWithoutSectionsInputObjectSchema } from './ArenaUncheckedCreateWithoutSectionsInput.schema';
import { ArenaCreateOrConnectWithoutSectionsInputObjectSchema } from './ArenaCreateOrConnectWithoutSectionsInput.schema';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCreateNestedOneWithoutSectionsInput> = z
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
    connect: z.lazy(() => ArenaWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ArenaCreateNestedOneWithoutSectionsInputObjectSchema = Schema;
