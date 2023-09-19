/*
  Warnings:

  - Added the required column `confirmationId` to the `TicketGroup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TicketGroup" ADD COLUMN     "confirmationId" TEXT NOT NULL;
