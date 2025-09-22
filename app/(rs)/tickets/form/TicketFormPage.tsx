"use client";
import {
  CustomersResultType,
  TicketsInputSchema,
  TicketsInputType,
  TicketsResultType,
} from "@/prisma/generated/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { InputWithLabel } from "@/components/inputs/InputWithLabel";
import { TextAreaWithLabel } from "@/components/inputs/TextAreaWithLabel";
import SelectWithLabel from "@/components/inputs/SelectWithLabel";
import { CheckboxWithLabel } from "@/components/inputs/CheckboxWithLabel";

type Props = {
  customer: CustomersResultType;
  ticket?: TicketsResultType;
};

export default function TicketFormPage({ customer, ticket }: Props) {
  // FORM DEFAULT VALUES
  const defaultValues: TicketsInputType = {
    id: ticket?.id ?? "",
    customerId: ticket?.customerId ?? 0,
    title: ticket?.title ?? "",
    completed: ticket?.completed ?? false,
    tech: ticket?.tech ?? "unassigned",
    description: ticket?.description ?? "",
  };

  const form = useForm<TicketsInputType>({
    mode: "onBlur",
    resolver: zodResolver(TicketsInputSchema),
    defaultValues,
  });

  // FORM SUBMIT HANDLER
  function onSubmit(data: TicketsInputType) {
    console.log(data);
  }

  return (
    <div>
      {ticket?.id && (
        <h1 className="text-3xl font-bold mb-8">Edit Ticket #{ticket.id}</h1>
      )}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col sm:flex-row gap-8"
        >
          {/* LEFT COLUMN */}
          <div className="flex flex-col w-xs gap-2">
            {/* FIELD : TICKET TITLE */}
            <InputWithLabel<TicketsInputType>
              nameInSchema="title"
              fieldTitle="Title"
              fieldDescription="Enter Ticket Title"
            />
            {/* FIELD : TICKET TECH, ASSIGNED TO */}
            <InputWithLabel<TicketsInputType>
              nameInSchema="tech"
              fieldTitle="Tech"
              disabled={true}
            />
            {/* FIELD : CHECKBOX : TICKET COMPLETED */}
            <CheckboxWithLabel<TicketsInputType>
              fieldTitle="Completed"
              nameInSchema="completed"
              message="Yes"
            />
            {/* CUSTOMER INFO */}
            <div className="mt-4 space-y-2">
              <h3 className="text-lg">Customer Info</h3>
              <hr className="w-4/5" />
              <p>
                {customer.firstName} {customer.lastName}
              </p>
              <p>
                {customer.address1}
                {customer.address2 ? `, ${customer.address2}` : ""}{" "}
                {customer.city}, {customer.state}, {customer.zip}
              </p>
              <hr className="w-4/5" />
              <p>{customer.email}</p>
              <p>{customer.phone}</p>
            </div>
          </div>

          <div>
            {/* RIGHT COLUMN: DESCRIPTION */}
            <TextAreaWithLabel<TicketsInputType>
              nameInSchema="description"
              fieldTitle="Description"
              className="h-96 w-96"
              readOnly={true}
            />
            <div className="flex flex-col w-full max-w-xs gap-4 mt-auto mb-6">
              <Button type="submit" variant="default">
                Save
              </Button>
              <Button
                type="button"
                variant="destructive"
                onClick={() => form.reset(defaultValues)}
              >
                Reset
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
