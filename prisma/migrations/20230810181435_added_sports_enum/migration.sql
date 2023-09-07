-- CreateEnum
CREATE TYPE "Sports" AS ENUM ('Basketball', 'Football', 'Soccer', 'MMA', 'Motorsports');

-- AlterEnum
ALTER TYPE "Leagues" ADD VALUE 'NCAA';

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "sport" "Sports" NOT NULL DEFAULT 'Football';
