/*
  Warnings:

  - The primary key for the `Faq` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Faq` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `domId` to the `Faq` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Faq" DROP CONSTRAINT "Faq_pkey",
ADD COLUMN     "domId" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Faq_pkey" PRIMARY KEY ("id");
