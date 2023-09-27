/*
  Warnings:

  - A unique constraint covering the columns `[transactionId]` on the table `TicketGroup` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TicketGroup_transactionId_key" ON "TicketGroup"("transactionId");
