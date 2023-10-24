/*
  Warnings:

  - You are about to drop the `ExternalTicketSource` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ExternalTicketSource" DROP CONSTRAINT "ExternalTicketSource_eventId_fkey";

-- DropTable
DROP TABLE "ExternalTicketSource";

-- CreateTable
CREATE TABLE "ExternalTicketData" (
    "id" SERIAL NOT NULL,
    "source" "EXTERNALSOURCE" NOT NULL,
    "eventId" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "seat" TEXT,
    "section" TEXT,
    "row" TEXT,
    "lastRetrieved" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ExternalTicketData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExternalTicketData_eventId_key" ON "ExternalTicketData"("eventId");

-- AddForeignKey
ALTER TABLE "ExternalTicketData" ADD CONSTRAINT "ExternalTicketData_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
