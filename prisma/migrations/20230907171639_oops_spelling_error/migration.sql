/*
  Warnings:

  - You are about to drop the column `IdVerified` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "IdVerified",
ADD COLUMN     "idVerified" "VERIFICATIONSTATUS" NOT NULL DEFAULT 'Unverified';
