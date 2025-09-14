import prisma from "@/lib/prisma";
import * as Sentry from "@sentry/nextjs";

export default async function getCustomer(customerId: number) {
  try {
    const customer = await prisma.customers.findUnique({
      where: { id: customerId },
    });

    return customer;
  } catch (error) {
    // Replace with a real logger in production (e.g., pino, winston)
    Sentry.captureException(error);
    console.error("Database error in getCustomer:", {
      customerId,
      error: (error as Error).message,
    });
    return null;
  }
}
