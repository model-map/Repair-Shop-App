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
  techs?: {
    id: string;
    description: string;
  }[];
  isEditable?: boolean;
};

export default function TicketFormPage({
  customer,
  ticket,
  techs,
  isEditable = true,
}: Props) {
  // Only MANAGERS will have `techs` array passed
  const isManager = Array.isArray(techs);

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
        <h2 className="text-2xl font-bold mb-8">
          {ticket?.id && isEditable
            ? `Edit Ticket # ${ticket.id}`
            : ticket?.id
            ? `View Ticket # ${ticket.id}`
            : "New Ticket Form"}
        </h2>
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
              disabled={!isEditable}
            />
            {/* FIELD : TECH
            Conditional rendering of a selectable tech input for managers or a disabled input for others.
             */}
            {isManager ? (
              <SelectWithLabel<TicketsInputType>
                fieldTitle="Tech ID"
                nameInSchema="tech"
                data={[
                  {
                    id: "new-ticket@example.com",
                    description: "new-ticket@example.com",
                  },
                  ...techs,
                ]}
              />
            ) : (
              <InputWithLabel<TicketsInputType>
                nameInSchema="tech"
                fieldTitle="Tech"
                disabled={true}
              />
            )}
            {/* FIELD : CHECKBOX : TICKET */}
            {ticket?.id ? (
              <CheckboxWithLabel<TicketsInputType>
                fieldTitle="Completed"
                nameInSchema="completed"
                message="Yes"
                disabled={isEditable}
              />
            ) : null}

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
              // readOnly={true}
              disabled={!isEditable}
            />
            {isEditable ? (
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
            ) : null}
          </div>
        </form>
      </Form>
    </div>
  );
}
