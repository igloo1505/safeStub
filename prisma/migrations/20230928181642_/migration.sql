/*
  Warnings:

  - You are about to drop the column `purchaseHistoryId` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `PurchaseHistory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `PurchaseHistory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_purchaseHistoryId_fkey";

-- DropIndex
DROP INDEX "users_purchaseHistoryId_key";

-- AlterTable
ALTER TABLE "PurchaseHistory" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "purchaseHistoryId";

-- CreateIndex
CREATE UNIQUE INDEX "PurchaseHistory_userId_key" ON "PurchaseHistory"("userId");

-- AddForeignKey
ALTER TABLE "PurchaseHistory" ADD CONSTRAINT "PurchaseHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
