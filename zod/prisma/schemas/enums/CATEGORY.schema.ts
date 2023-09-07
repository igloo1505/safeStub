import { z } from 'zod';

export const CATEGORYSchema = z.enum(['Music', 'Sports', 'Comedy']);
