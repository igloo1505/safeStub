/*
  Warnings:

  - Added the required column `name` to the `Arena` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ArenaSection` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Leagues" AS ENUM ('NFL');

-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_userId_fkey";

-- AlterTable
ALTER TABLE "Arena" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ArenaSection" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Location" ALTER COLUMN "userId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "abbreviation" TEXT,
    "league" "Leagues" NOT NULL DEFAULT 'NFL',
    "homeArenaId" INTEGER,
    "eventId" INTEGER,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_homeArenaId_fkey" FOREIGN KEY ("homeArenaId") REFERENCES "Arena"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_userId_fkey" FOREIGN KEY ("userId") REFERENCES "PersonalDetails"("id") ON DELETE SET NULL ON UPDATE CASCADE;
