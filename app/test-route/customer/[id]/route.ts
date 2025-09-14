import { Customers } from "@/generated/prisma";
import GetAllCustomers from "@/lib/queries/getAllCustomers";
import getCustomer from "@/lib/queries/getCustomer";
import { NextResponse } from "next/server";

type Props = {
  params: Promise<{ id: string }>;
};

export async function GET(_req: NextRequest, { params }: Props) {
  let { id }: { id: string | number } = await params;
  id = parseInt(id);
  const customer = await getCustomer(id);
  console.log(`Customer: ${customer}`);
  return NextResponse.json({ customer: customer });
}
