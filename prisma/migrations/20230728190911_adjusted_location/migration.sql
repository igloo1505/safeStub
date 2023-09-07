/*
  Warnings:

  - The `verified` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "VERIFICATIONSTATUS" AS ENUM ('Verified', 'Pending', 'Unverified');

-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "cityId" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "verified",
ADD COLUMN     "verified" "VERIFICATIONSTATUS" NOT NULL DEFAULT 'Unverified';
