/*
  Warnings:

  - You are about to drop the column `status` on the `Ticket` table. All the data in the column will be lost.
  - Added the required column `transactionId` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payout` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "status",
ADD COLUMN     "transactionId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "payout" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "status" "TRANSACTIONSTATUS" NOT NULL DEFAULT 'forSale',
ADD COLUMN     "total" DOUBLE PRECISION NOT NULL;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
