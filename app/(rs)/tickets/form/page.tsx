/**
 * TicketFormPage is a Next.js server component that loads and displays a ticket form.
 * It expects either a customerId or ticketId from the search parameters.
 * - If no IDs are given, it shows an error with a back button.
 * - If a customerId is provided, it fetches the customer and checks if it exists and is active before showing the form. Otherwise, it shows an error message.
 * - If a ticketId is provided, it fetches the ticket and its customer, then shows the form.
 * It also checks Kinde permissions to see if the user is a manager.
 * Errors are logged with Sentry.
 */

import { BackButton } from "@/components/BackButton";
import getCustomer from "@/lib/queries/getCustomer";
import getTicket from "@/lib/queries/getTicket";
import * as Sentry from "@sentry/nextjs";
import TicketForm from "@/app/(rs)/tickets/form/TicketFormPage";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Users, init as kindeInit } from "@kinde/management-api-js";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props) {
  const { customerId, ticketId } = await searchParams;
  let title = "";
  if (!customerId && !ticketId) {
    title = "Missing Ticket ID or Customer ID";
  }

  if (customerId) {
    title = `New Ticket for Customer # ${customerId}`;
  }

  if (ticketId) {
    title = `Edit Ticket # ${ticketId}`;
  }

  return title;
}

export default async function TicketFormPage({ searchParams }: Props) {
  try {
    const { customerId, ticketId } = await searchParams;

    // KINDE : get permission and user
    const { getPermission, getUser } = getKindeServerSession();
    const [managerPermission, user] = await Promise.all([
      getPermission("manager"),
      getUser(),
    ]);

    // KINDE : CHECK FOR MANAGER PERMISSIONS
    const isManager = managerPermission?.isGranted;

    // CUSTOMERID and TICKETID cases
    if (!customerId && !ticketId) {
      return (
        <>
          <h2 className="text-2xl mb-2">
            Ticket ID or Customer ID required to load ticket form
          </h2>
          <BackButton title="Go Back" variant="default" />
        </>
      );
    }

    if (customerId) {
      const customer = await getCustomer(Number(customerId));
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
      if (!customer.active) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer ID #{customerId} is not active
            </h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }

      // return ticket form
      if (isManager) {
        kindeInit(); // Initialises the Kinde Management API
        const { users } = await Users.getUsers();

        const techs = users
          ? users.map((user) => ({
              id: user.email!,
              description: user.email!,
            }))
          : [];

        return <TicketForm customer={customer} techs={techs} />;
      } else {
        return <TicketForm customer={customer} />;
      }
    }
    // If ticket id was found
    if (ticketId) {
      const ticket = await getTicket(Number(ticketId));
      if (!ticket) {
        return (
          <>
            <h2 className="text-2xl mb-2">Ticket ID #{ticketId} not found</h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }
      const customer = await getCustomer(Number(ticket.customerId));

      // return ticket form
      if (isManager) {
        kindeInit(); // Initialises the Kinde Management API
        const { users } = await Users.getUsers();

        const techs = users
          ? users.map((user) => ({
              id: user.email!,
              description: user.email!,
            }))
          : [];

        return (
          <TicketForm customer={customer!} ticket={ticket} techs={techs} />
        );
      } else {
        const isEditable =
          user?.email?.toLocaleLowerCase() === ticket.tech.toLocaleLowerCase();

        return (
          <TicketForm
            customer={customer!}
            ticket={ticket}
            isEditable={isEditable}
          />
        );
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      Sentry.captureException(error);
      throw error;
    }
  }
}
