/*
  Warnings:

  - A unique constraint covering the columns `[uniqueKey]` on the table `Arena` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Arena" ADD COLUMN     "uniqueKey" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Arena_uniqueKey_key" ON "Arena"("uniqueKey");
