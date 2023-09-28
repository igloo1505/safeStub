/*
  Warnings:

  - You are about to drop the column `userId` on the `PurchaseHistory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[purchaseHistoryId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `purchaseHistoryId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PurchaseHistory" DROP CONSTRAINT "PurchaseHistory_userId_fkey";

-- DropIndex
DROP INDEX "PurchaseHistory_userId_key";

-- AlterTable
ALTER TABLE "PurchaseHistory" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "purchaseHistoryId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_purchaseHistoryId_key" ON "users"("purchaseHistoryId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_purchaseHistoryId_fkey" FOREIGN KEY ("purchaseHistoryId") REFERENCES "PurchaseHistory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
