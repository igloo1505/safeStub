/*
  Warnings:

  - The values [MUSIC,SPORTS,COMEDY] on the enum `CATEGORY` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CATEGORY_new" AS ENUM ('Music', 'Sports', 'Comedy');
ALTER TABLE "Event" ALTER COLUMN "category" TYPE "CATEGORY_new" USING ("category"::text::"CATEGORY_new");
ALTER TYPE "CATEGORY" RENAME TO "CATEGORY_old";
ALTER TYPE "CATEGORY_new" RENAME TO "CATEGORY";
DROP TYPE "CATEGORY_old";
COMMIT;
