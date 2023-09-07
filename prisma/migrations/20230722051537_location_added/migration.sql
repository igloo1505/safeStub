/*
  Warnings:

  - Added the required column `locationId` to the `Arena` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Arena" ADD COLUMN     "locationId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "street" TEXT NOT NULL,
    "zip" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL DEFAULT 'Il',
    "lat" DOUBLE PRECISION,
    "long" DOUBLE PRECISION,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Arena" ADD CONSTRAINT "Arena_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
