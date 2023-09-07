/*
  Warnings:

  - You are about to drop the column `purchaseHistoryId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userName]` on the table `PurchaseHistory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sectionImageId` to the `Arena` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `PurchaseHistory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_paymentAccountDetailsId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_purchaseHistoryId_fkey";

-- AlterTable
ALTER TABLE "Arena" ADD COLUMN     "sectionImageId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PurchaseHistory" ADD COLUMN     "userName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "purchaseHistoryId",
ALTER COLUMN "paymentAccountDetailsId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "publicUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventToTag_AB_unique" ON "_EventToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToTag_B_index" ON "_EventToTag"("B");

-- CreateIndex
CREATE UNIQUE INDEX "PurchaseHistory_userName_key" ON "PurchaseHistory"("userName");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_paymentAccountDetailsId_fkey" FOREIGN KEY ("paymentAccountDetailsId") REFERENCES "PaymentAccountDetails"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Arena" ADD CONSTRAINT "Arena_sectionImageId_fkey" FOREIGN KEY ("sectionImageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseHistory" ADD CONSTRAINT "PurchaseHistory_userName_fkey" FOREIGN KEY ("userName") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToTag" ADD CONSTRAINT "_EventToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToTag" ADD CONSTRAINT "_EventToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
