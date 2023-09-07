import { z } from 'zod';

export const CountrySchema = z.enum(['US', 'GER', 'UK']);
