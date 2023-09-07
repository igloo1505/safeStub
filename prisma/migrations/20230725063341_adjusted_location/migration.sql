/*
  Warnings:

  - The `state` column on the `Location` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Location" DROP COLUMN "state",
ADD COLUMN     "state" "USSTATE" NOT NULL DEFAULT 'WI';
