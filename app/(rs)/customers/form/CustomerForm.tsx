"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import {
  CustomersInputSchema,
  type CustomersInputType,
  type CustomersResultType,
} from "@/prisma/generated/schemas";

type Props = {
  customer?: CustomersResultType;
};

export default function CustomerForm({ customer }: Props) {
  const defaultValues: CustomersInputType = {
    id: customer?.id ?? 0,
    firstName: customer?.firstName ?? "",
    lastName: customer?.lastName ?? "",
    email: customer?.email ?? "",
    phone: customer?.phone ?? "null",
    address1: customer?.address1 ?? "",
    state: customer?.state ?? "",
    zip: customer?.zip ?? "null",
    address2: customer?.address2 ?? null,
    notes: customer?.notes ?? null,
  };

  const form = useForm<CustomersInputType>({
    mode: "onBlur",
    resolver: zodResolver(CustomersInputSchema),
    defaultValues,
  });

  async function submitForm(data: CustomersInputType) {
    console.log(data);
  }

  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <div>
        <h2 className="text-2xl font-bold">
          {customer?.id ? "Edit" : "New"} Customer Form
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
