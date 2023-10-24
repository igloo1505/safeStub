-- CreateEnum
CREATE TYPE "EXTERNALSOURCE" AS ENUM ('ticketMaster', 'vividSeats', 'seatGeek', 'tickPick');

-- CreateTable
CREATE TABLE "ExternalTicketSource" (
    "id" SERIAL NOT NULL,
    "source" "EXTERNALSOURCE" NOT NULL,
    "eventId" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "seat" TEXT,
    "section" TEXT,
    "row" TEXT,
    "lastRetrieved" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ExternalTicketSource_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExternalTicketSource_eventId_key" ON "ExternalTicketSource"("eventId");

-- AddForeignKey
ALTER TABLE "ExternalTicketSource" ADD CONSTRAINT "ExternalTicketSource_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
