import { z } from 'zod';
import { ArenaWhereUniqueInputObjectSchema } from './ArenaWhereUniqueInput.schema';
import { ArenaCreateWithoutSectionsInputObjectSchema } from './ArenaCreateWithoutSectionsInput.schema';
import { ArenaUncheckedCreateWithoutSectionsInputObjectSchema } from './ArenaUncheckedCreateWithoutSectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaCreateOrConnectWithoutSectionsInput> = z
  .object({
    where: z.lazy(() => ArenaWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArenaCreateWithoutSectionsInputObjectSchema),
      z.lazy(() => ArenaUncheckedCreateWithoutSectionsInputObjectSchema),
    ]),
  })
  .strict();

export const ArenaCreateOrConnectWithoutSectionsInputObjectSchema = Schema;
