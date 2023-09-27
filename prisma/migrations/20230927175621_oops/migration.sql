/*
  Warnings:

  - You are about to drop the column `postedOn` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `purchasedOn` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "postedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "purchasedOn" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "users" DROP COLUMN "postedOn",
DROP COLUMN "purchasedOn";
