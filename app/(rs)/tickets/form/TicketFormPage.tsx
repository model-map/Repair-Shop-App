"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  CustomersInputType,
  TicketsInputSchema,
  type TicketsInputType,
  type TicketsResultType,
} from "@/prisma/generated/schemas";
import { Form } from "@/components/ui/form";

type Props = {
  customer: CustomersInputType;
  ticket?: TicketsResultType;
};

export default function TicketForm({ customer, ticket }: Props) {
  const defaultValues: TicketsInputType = {
    id: ticket?.id ?? "(New)",
    customerId: ticket?.customerId ?? customer.id,
    title: ticket?.title ?? "",
    description: ticket?.description ?? "",
    completed: ticket?.completed ?? false,
    tech: ticket?.tech ?? "new-ticket@example.com",
  };

  const form = useForm<TicketsInputType>({
    mode: "onBlur",
    resolver: zodResolver(TicketsInputSchema),
    defaultValues,
  });

  async function submitForm(data: TicketsInputType) {
    console.log(data);
  }

  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <div>
        <h2 className="text-2xl font-bold">
          {ticket?.id ? "Edit" : "New"} Ticket{" "}
          {ticket?.id ? `#${ticket.id}` : "Form"}
        </h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitForm)}
          className="flex flex-col sm:flex-row gap-4 sm:gap-8"
        >
          <p>{JSON.stringify(form.getValues())}</p>
        </form>
      </Form>
    </div>
  );
}
