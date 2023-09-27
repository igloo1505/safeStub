/*
  Warnings:

  - You are about to drop the column `buyerId` on the `TicketGroup` table. All the data in the column will be lost.
  - You are about to drop the column `sellerId` on the `TicketGroup` table. All the data in the column will be lost.
  - Added the required column `sellerId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TicketGroup" DROP CONSTRAINT "TicketGroup_buyerId_fkey";

-- DropForeignKey
ALTER TABLE "TicketGroup" DROP CONSTRAINT "TicketGroup_sellerId_fkey";

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "buyerId" TEXT,
ADD COLUMN     "sellerId" TEXT NOT NULL,
ADD COLUMN     "status" "TRANSACTIONSTATUS" NOT NULL DEFAULT 'forSale';

-- AlterTable
ALTER TABLE "TicketGroup" DROP COLUMN "buyerId",
DROP COLUMN "sellerId";

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
