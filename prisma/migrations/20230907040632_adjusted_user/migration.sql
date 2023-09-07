/*
  Warnings:

  - You are about to drop the `LegalName` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PersonalDetails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LegalName" DROP CONSTRAINT "LegalName_detailsId_fkey";

-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_userId_fkey";

-- DropForeignKey
ALTER TABLE "PersonalDetails" DROP CONSTRAINT "PersonalDetails_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "image" TEXT,
ADD COLUMN     "name" TEXT;

-- DropTable
DROP TABLE "LegalName";

-- DropTable
DROP TABLE "PersonalDetails";
