/*
  Warnings:

  - Added the required column `payoutMethod` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "PAYOUTMETHODS" ADD VALUE 'credits';

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "payoutMethod" "PAYOUTMETHODS" NOT NULL;
