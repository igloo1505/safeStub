/*
  Warnings:

  - You are about to drop the column `seatedTogether` on the `TicketGroup` table. All the data in the column will be lost.
  - Added the required column `row` to the `ArenaSection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `section` to the `ArenaSection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `arenaSectionId` to the `TicketGroup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ArenaSection" ADD COLUMN     "row" INTEGER NOT NULL,
ADD COLUMN     "section" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Location" ALTER COLUMN "state" DROP DEFAULT;

-- AlterTable
ALTER TABLE "TicketGroup" DROP COLUMN "seatedTogether",
ADD COLUMN     "arenaSectionId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "TicketGroup" ADD CONSTRAINT "TicketGroup_arenaSectionId_fkey" FOREIGN KEY ("arenaSectionId") REFERENCES "ArenaSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
