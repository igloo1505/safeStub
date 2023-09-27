/*
  Warnings:

  - You are about to drop the column `postedOn` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `purchasedOn` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "postedOn",
DROP COLUMN "purchasedOn";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "date",
ADD COLUMN     "postedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "purchasedOn" TIMESTAMP(3);
