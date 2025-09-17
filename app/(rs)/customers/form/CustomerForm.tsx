"use client";

import { Form } from "@/components/ui/form";
import {
  CustomersInputSchema,
  CustomersInputType,
  CustomersResultType,
} from "@/prisma/generated/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/inputs/InputWithLabel";
import { TextAreaWithLabel } from "@/components/inputs/TextAreaWithLabel";

type Props = {
  customer?: CustomersResultType;
};

export default function CustomerForm({ customer }: Props) {
  const defaultValues: CustomersInputType = {
    id: customer?.id ?? 0,
    firstName: customer?.firstName ?? "",
    lastName: customer?.lastName ?? "",
    email: customer?.email ?? "",
    phone: customer?.phone ?? "",
    address1: customer?.address1 ?? "",
    address2: customer?.address2 ?? "",
    city: customer?.city ?? "",
    state: customer?.state ?? "",
    zip: customer?.state ?? "",
    notes: customer?.notes ?? "",
    active: customer?.active ?? false,
  };

  const form = useForm<CustomersInputType>({
    mode: "onBlur",
    resolver: zodResolver(CustomersInputSchema),
    defaultValues,
  });

  async function submitForm(data: CustomersInputType) {}

  return (
    <div className="flex flex-col gap-4 md:px-8">
      <div className="font-bold text-2xl">
        <h2>{customer?.id ? "Edit" : "New"} Customer Form</h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitForm)}
          className="flex flex-col md:flex-row gap-4 md:gap-8"
        >
          <div className="w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 w-full max-w-2xl">
              {/* FIELD : FIRST NAME */}
              <InputWithLabel<CustomersInputType>
                nameInSchema="firstName"
                fieldTitle="First Name"
                fieldDescription="Enter First Name"
              />
              {/* FIELD : ADDRESS 2 */}
              <InputWithLabel<CustomersInputType>
                nameInSchema="address2"
                fieldTitle="Address 2"
                fieldDescription="Address Line 2"
              />

              {/* FIELD : LAST NAME */}
              <InputWithLabel<CustomersInputType>
                nameInSchema="lastName"
                fieldTitle="Last Name"
                fieldDescription="Enter Last Name"
              />
              {/* FIELD : CITY */}
              <InputWithLabel<CustomersInputType>
                nameInSchema="city"
                fieldTitle="City"
                fieldDescription="Enter city here"
              />

              {/* FIELD : EMAIL */}
              <InputWithLabel<CustomersInputType>
                nameInSchema="email"
                fieldTitle="Email"
                fieldDescription="Enter email here"
              />
              {/* FIELD : STATE */}
              <InputWithLabel<CustomersInputType>
                nameInSchema="state"
                fieldTitle="State"
                fieldDescription="Enter State here"
              />

              {/* FIELD : PHONE */}
              <InputWithLabel<CustomersInputType>
                nameInSchema="phone"
                fieldTitle="Phone Number"
                fieldDescription="XXXX-XXX-XXX"
              />
              {/* FIELD : ZIP */}
              <InputWithLabel<CustomersInputType>
                nameInSchema="zip"
                fieldTitle="Zip code"
                fieldDescription="XXXXXX"
              />

              {/* FIELD : ADDRESS 1 (FULL WIDTH) */}
              <InputWithLabel<CustomersInputType>
                nameInSchema="address1"
                fieldTitle="Address 1"
                fieldDescription="Enter your address"
                className="col-span-2"
              />
              {/* NOTES */}
              <TextAreaWithLabel<CustomersInputType>
                nameInSchema="notes"
                fieldTitle="Notes"
                fieldDescription="Enter your notes"
                className="col-span-2"
              />
            </div>
            {/* BUTTONS */}
            {/* BUTTONS */}
            <div className="grid grid-cols-2 gap-4 mt-4 max-w-2xl">
              <Button
                type="submit"
                className="w-full"
                variant="default"
                title="Save"
              >
                Save
              </Button>
              <Button
                type="button"
                className="w-full"
                variant="destructive"
                title="Reset"
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
