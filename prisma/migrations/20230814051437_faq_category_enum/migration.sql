/*
  Warnings:

  - The values [Niners] on the enum `NFLTeamName` will be removed. If these variants are still used in the database, this will fail.
  - Made the column `name` on table `Team` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "NFL_Conference" AS ENUM ('NFC', 'AFC');

-- CreateEnum
CREATE TYPE "NFL_Division" AS ENUM ('North', 'West', 'East', 'South');

-- CreateEnum
CREATE TYPE "FaqCategory" AS ENUM ('general', 'billing', 'trustAndSaftey');

-- AlterEnum
BEGIN;
CREATE TYPE "NFLTeamName_new" AS ENUM ('Cardinals', 'Falcons', 'Ravens', 'Bills', 'Panthers', 'Bengals', 'Bears', 'Browns', 'Cowboys', 'Broncos', 'Lions', 'Texans', 'Packers', 'Colts', 'Rams', 'Jaguars', 'Vikings', 'Chiefs', 'Saints', 'Raiders', 'Giants', 'Chargers', 'Eagles', 'Dolphins', 'FourtyNiners', 'Patriots', 'Seahawks', 'Jets', 'Buccaneers', 'Steelers', 'Commanders', 'Titans');
ALTER TABLE "Team" ALTER COLUMN "name" TYPE "NFLTeamName_new" USING ("name"::text::"NFLTeamName_new");
ALTER TYPE "NFLTeamName" RENAME TO "NFLTeamName_old";
ALTER TYPE "NFLTeamName_new" RENAME TO "NFLTeamName";
DROP TYPE "NFLTeamName_old";
COMMIT;

-- AlterTable
ALTER TABLE "Faq" ADD COLUMN     "category" "FaqCategory" NOT NULL DEFAULT 'general';

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "colorsId" INTEGER,
ADD COLUMN     "conference" "NFL_Conference",
ADD COLUMN     "division" "NFL_Division",
ALTER COLUMN "name" SET NOT NULL;

-- CreateTable
CREATE TABLE "Colors" (
    "id" SERIAL NOT NULL,
    "primary" TEXT NOT NULL,
    "secondary" TEXT,

    CONSTRAINT "Colors_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_colorsId_fkey" FOREIGN KEY ("colorsId") REFERENCES "Colors"("id") ON DELETE SET NULL ON UPDATE CASCADE;
