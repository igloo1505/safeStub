/*
  Warnings:

  - Added the required column `paymentMethodType` to the `PaymentAccountDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "TRANSACTIONSTATUS" ADD VALUE 'forSale';

-- AlterTable
ALTER TABLE "PaymentAccountDetails" ADD COLUMN     "paymentMethodType" "PAYOUTMETHODS" NOT NULL;
