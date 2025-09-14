import { Customers } from "@/generated/prisma";
import prisma from "../prisma";
import * as Sentry from "@sentry/nextjs";

export default async function GetAllCustomers() {
  try {
    const customers: Customers[] = await prisma.customers.findMany();
    return customers;
  } catch (error) {
    Sentry.captureException(error);
    console.error(`Error occured while fetching All customers`, {
      error: (error as Error).message,
    });
  }
}
