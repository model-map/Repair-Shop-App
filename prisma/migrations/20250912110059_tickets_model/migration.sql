-- CreateTable
CREATE TABLE "public"."Tickets" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "tech" TEXT NOT NULL DEFAULT 'unassigned',
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "Tickets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Tickets" ADD CONSTRAINT "Tickets_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "public"."Customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
