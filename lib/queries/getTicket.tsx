import prisma from "@/lib/prisma";
import * as Sentry from "@sentry/nextjs";

export default async function getTicket(ticketId: number) {
  try {
    const ticket = await prisma.tickets.findUnique({
      where: { id: ticketId },
    });
    return ticket;
  } catch (error) {
    Sentry.captureException(error);
    console.error(`Error while fetching ticket: ${error}`, {
      ticketId,
      error: (error as Error).message,
    });
    return null;
  }
}
