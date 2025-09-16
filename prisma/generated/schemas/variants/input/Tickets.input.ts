import { z } from "zod";

export const TicketsInputSchema = z
  .object({
    id: z.union([z.number(), z.literal("(New)")]),
    customerId: z.number().int(),
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    completed: z.boolean(),
    tech: z.email("Invalid email address"),
  })
  .strict();

export type TicketsInputType = z.infer<typeof TicketsInputSchema>;
