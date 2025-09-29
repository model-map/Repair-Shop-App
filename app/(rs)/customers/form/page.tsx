import { BackButton } from "@/components/BackButton";
import getCustomer from "@/lib/queries/getCustomer";
import * as Sentry from "@sentry/nextjs";
import CustomerForm from "@/app/(rs)/customers/form/CustomerForm";

// -------- SETTING METADATA
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  let title = "";
  const { customerId } = await searchParams;
  if (!customerId) {
    title = "New Customer";
  } else {
    title = `Edit Customer #${customerId}`;
  }
  return { title };
}

// -------- DEFINING PROPS
type Props = {
  //   searchParams?: Promise<{ [key: string]: string | undefined }>;
  searchParams: Promise<{ customerId: string }>;
};

// -------- EXPORTING COMPONENT
export default async function CustomerFormPage({ searchParams }: Props) {
  try {
    const { customerId } = await searchParams;
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));

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
