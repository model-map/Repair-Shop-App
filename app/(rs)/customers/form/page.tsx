import { BackButton } from "@/components/BackButton";
import getCustomer from "@/lib/queries/getCustomer";
import * as Sentry from "@sentry/nextjs";
import CustomerForm from "@/app/(rs)/customers/form/CustomerForm";

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
      return <CustomerForm customer={customer} />;
    } else {
      // new customer form component
      return <CustomerForm />;
    }
  } catch (error) {
    if (error instanceof Error) {
      Sentry.captureException(error);
      throw error;
    }
  }
}
