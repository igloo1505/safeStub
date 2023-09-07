import { z } from 'zod';
import { ArenaUpdateWithoutSectionsInputObjectSchema } from './ArenaUpdateWithoutSectionsInput.schema';
import { ArenaUncheckedUpdateWithoutSectionsInputObjectSchema } from './ArenaUncheckedUpdateWithoutSectionsInput.schema';
import { ArenaCreateWithoutSectionsInputObjectSchema } from './ArenaCreateWithoutSectionsInput.schema';
import { ArenaUncheckedCreateWithoutSectionsInputObjectSchema } from './ArenaUncheckedCreateWithoutSectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaUpsertWithoutSectionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArenaUpdateWithoutSectionsInputObjectSchema),
      z.lazy(() => ArenaUncheckedUpdateWithoutSectionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArenaCreateWithoutSectionsInputObjectSchema),
      z.lazy(() => ArenaUncheckedCreateWithoutSectionsInputObjectSchema),
    ]),
  })
  .strict();

export const ArenaUpsertWithoutSectionsInputObjectSchema = Schema;
