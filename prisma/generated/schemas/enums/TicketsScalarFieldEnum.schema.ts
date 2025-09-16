import { z } from 'zod';

export const TicketsScalarFieldEnumSchema = z.enum(['id', 'title', 'description', 'completed', 'tech', 'createdAt', 'updatedAt', 'customerId'])

export type TicketsScalarFieldEnum = z.infer<typeof TicketsScalarFieldEnumSchema>;