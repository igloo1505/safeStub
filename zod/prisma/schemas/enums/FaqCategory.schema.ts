import { z } from 'zod';

export const FaqCategorySchema = z.enum([
  'general',
  'billing',
  'services',
  'trustAndSaftey',
]);
