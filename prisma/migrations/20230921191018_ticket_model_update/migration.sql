/*
  Warnings:

  - Added the required column `sellerId` to the `TicketGroup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TicketGroup" ADD COLUMN     "buyerId" TEXT,
ADD COLUMN     "sellerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TicketGroup" ADD CONSTRAINT "TicketGroup_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TicketGroup" ADD CONSTRAINT "TicketGroup_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
