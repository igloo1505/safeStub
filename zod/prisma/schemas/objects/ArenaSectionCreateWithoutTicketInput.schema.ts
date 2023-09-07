import { z } from 'zod';
import { ArenaCreateNestedOneWithoutSectionsInputObjectSchema } from './ArenaCreateNestedOneWithoutSectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionCreateWithoutTicketInput> = z
  .object({
    name: z.string(),
    Arena: z.lazy(() => ArenaCreateNestedOneWithoutSectionsInputObjectSchema),
  })
  .strict();

export const ArenaSectionCreateWithoutTicketInputObjectSchema = Schema;
