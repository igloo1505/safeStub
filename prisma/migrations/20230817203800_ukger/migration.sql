-- CreateEnum
CREATE TYPE "Country" AS ENUM ('US', 'GER', 'UK');

-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "country" "Country" NOT NULL DEFAULT 'US',
ALTER COLUMN "state" DROP NOT NULL;
