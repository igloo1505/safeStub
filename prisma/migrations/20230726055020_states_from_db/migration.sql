-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "USSTATE" ADD VALUE 'UM_81';
ALTER TYPE "USSTATE" ADD VALUE 'UM_84';
ALTER TYPE "USSTATE" ADD VALUE 'UM_86';
ALTER TYPE "USSTATE" ADD VALUE 'UM_67';
ALTER TYPE "USSTATE" ADD VALUE 'UM_89';
ALTER TYPE "USSTATE" ADD VALUE 'UM_71';
ALTER TYPE "USSTATE" ADD VALUE 'UM_76';
ALTER TYPE "USSTATE" ADD VALUE 'UM_95';
ALTER TYPE "USSTATE" ADD VALUE 'UM_79';
