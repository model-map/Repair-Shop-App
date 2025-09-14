import { BackButton } from "@/components/BackButton";
import { Customers } from "@/generated/prisma";
import GetAllCustomers from "@/lib/queries/getAllCustomers";
import getCustomer from "@/lib/queries/getCustomer";

type Props = {
  //   searchParams?: Promise<{ [key: string]: string | undefined }>;
  searchParams: Promise<{ customerId: string }>;
};

export default async function CustomerFormPage({ searchParams }: Props) {
  try {
    const { customerId } = await searchParams;
    console.log("Customer ID: ", { customerId: customerId });
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));

      console.log("Customer", { customer: customer });
      // Edit customer form
      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer ID #{customerId} not found
            </h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }
      //put customer form component
    } else {
      // new customer form component
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }
}
