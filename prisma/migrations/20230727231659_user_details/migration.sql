/*
  Warnings:

  - You are about to drop the column `userName` on the `PurchaseHistory` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `PurchaseHistory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `PurchaseHistory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PurchaseHistory" DROP CONSTRAINT "PurchaseHistory_userName_fkey";

-- DropIndex
DROP INDEX "PurchaseHistory_userName_key";

-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "PurchaseHistory" DROP COLUMN "userName",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "username",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "role" SET DEFAULT 'ADMIN',
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "LegalName" (
    "first" TEXT NOT NULL,
    "middle" TEXT,
    "last" TEXT NOT NULL,
    "detailsId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "PersonalDetails" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PersonalDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LegalName_detailsId_key" ON "LegalName"("detailsId");

-- CreateIndex
CREATE UNIQUE INDEX "PersonalDetails_userId_key" ON "PersonalDetails"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PurchaseHistory_userId_key" ON "PurchaseHistory"("userId");

-- AddForeignKey
ALTER TABLE "LegalName" ADD CONSTRAINT "LegalName_detailsId_fkey" FOREIGN KEY ("detailsId") REFERENCES "PersonalDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalDetails" ADD CONSTRAINT "PersonalDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseHistory" ADD CONSTRAINT "PurchaseHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
