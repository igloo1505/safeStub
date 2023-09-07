import { z } from 'zod';

export const NFL_DivisionSchema = z.enum(['North', 'West', 'East', 'South']);
