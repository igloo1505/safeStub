/*
  Warnings:

  - You are about to drop the column `arenaSectionId` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `arenaSectionId` on the `TicketGroup` table. All the data in the column will be lost.
  - You are about to drop the `ArenaSection` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[confirmationId]` on the table `TicketGroup` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `row` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seat` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `section` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ArenaSection" DROP CONSTRAINT "ArenaSection_arenaId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_arenaSectionId_fkey";

-- DropForeignKey
ALTER TABLE "TicketGroup" DROP CONSTRAINT "TicketGroup_arenaSectionId_fkey";

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "arenaSectionId",
ADD COLUMN     "row" TEXT NOT NULL,
ADD COLUMN     "seat" TEXT NOT NULL,
ADD COLUMN     "section" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TicketGroup" DROP COLUMN "arenaSectionId";

-- DropTable
DROP TABLE "ArenaSection";

-- CreateIndex
CREATE UNIQUE INDEX "TicketGroup_confirmationId_key" ON "TicketGroup"("confirmationId");
