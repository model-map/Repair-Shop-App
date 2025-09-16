import { z } from 'zod';
export const TicketsAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    title: z.number(),
    description: z.number(),
    completed: z.number(),
    tech: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    customerId: z.number(),
    customer: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    customerId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    customerId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    tech: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    customerId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    tech: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    customerId: z.number().int().nullable()
  }).nullable().optional()});