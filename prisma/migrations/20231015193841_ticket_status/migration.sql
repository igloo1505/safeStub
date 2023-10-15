-- CreateEnum
CREATE TYPE "TicketStatus" AS ENUM ('forSale', 'awaitingTransferFromSellerToSafeStub', 'awaitingTransferFromSafeStubToBuyer', 'eventPassedWithoutSale', 'retractedBySellerWithoutSale', 'sold');

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "status" "TicketStatus" NOT NULL DEFAULT 'forSale';
