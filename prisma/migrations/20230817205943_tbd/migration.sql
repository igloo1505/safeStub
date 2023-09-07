/*
  Warnings:

  - A unique constraint covering the columns `[uniqueKey]` on the table `Location` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "uniqueKey" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Location_uniqueKey_key" ON "Location"("uniqueKey");
