import { z } from 'zod';
import { ArenaSectionScalarWhereInputObjectSchema } from './ArenaSectionScalarWhereInput.schema';
import { ArenaSectionUpdateManyMutationInputObjectSchema } from './ArenaSectionUpdateManyMutationInput.schema';
import { ArenaSectionUncheckedUpdateManyWithoutSectionsInputObjectSchema } from './ArenaSectionUncheckedUpdateManyWithoutSectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArenaSectionUpdateManyWithWhereWithoutArenaInput> =
  z
    .object({
      where: z.lazy(() => ArenaSectionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ArenaSectionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ArenaSectionUncheckedUpdateManyWithoutSectionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ArenaSectionUpdateManyWithWhereWithoutArenaInputObjectSchema =
  Schema;
