/*
  Warnings:

  - You are about to drop the column `eventId` on the `Team` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_eventId_fkey";

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "eventId";

-- CreateTable
CREATE TABLE "_EventToTeam" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventToTeam_AB_unique" ON "_EventToTeam"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToTeam_B_index" ON "_EventToTeam"("B");

-- AddForeignKey
ALTER TABLE "_EventToTeam" ADD CONSTRAINT "_EventToTeam_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToTeam" ADD CONSTRAINT "_EventToTeam_B_fkey" FOREIGN KEY ("B") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;
