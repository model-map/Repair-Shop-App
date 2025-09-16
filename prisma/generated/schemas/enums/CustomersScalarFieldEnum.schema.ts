import { z } from 'zod';

export const CustomersScalarFieldEnumSchema = z.enum(['id', 'firstName', 'lastName', 'email', 'phone', 'address1', 'address2', 'state', 'zip', 'notes', 'active', 'createdAt', 'updatedAt'])

export type CustomersScalarFieldEnum = z.infer<typeof CustomersScalarFieldEnumSchema>;