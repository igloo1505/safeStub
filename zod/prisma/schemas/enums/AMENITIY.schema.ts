import { z } from 'zod';

export const AMENITIYSchema = z.enum(['total', 'partial', 'none']);
