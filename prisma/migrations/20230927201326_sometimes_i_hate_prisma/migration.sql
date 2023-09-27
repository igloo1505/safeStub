-- DropForeignKey
ALTER TABLE "TicketGroup" DROP CONSTRAINT "TicketGroup_transactionId_fkey";

-- DropIndex
DROP INDEX "TicketGroup_transactionId_key";

-- AlterTable
ALTER TABLE "TicketGroup" ALTER COLUMN "transactionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "TicketGroup" ADD CONSTRAINT "TicketGroup_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE SET NULL ON UPDATE CASCADE;
