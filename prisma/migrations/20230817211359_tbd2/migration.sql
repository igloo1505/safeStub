/*
  Warnings:

  - A unique constraint covering the columns `[uniqueKey]` on the table `Team` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "uniqueKey" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Team_uniqueKey_key" ON "Team"("uniqueKey");
