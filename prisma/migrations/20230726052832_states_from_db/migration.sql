/*
  Warnings:

  - The values [TT] on the enum `USSTATE` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "USSTATE_new" AS ENUM ('AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UM', 'VI', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY');
ALTER TABLE "Location" ALTER COLUMN "state" DROP DEFAULT;
ALTER TABLE "Location" ALTER COLUMN "state" TYPE "USSTATE_new" USING ("state"::text::"USSTATE_new");
ALTER TYPE "USSTATE" RENAME TO "USSTATE_old";
ALTER TYPE "USSTATE_new" RENAME TO "USSTATE";
DROP TYPE "USSTATE_old";
ALTER TABLE "Location" ALTER COLUMN "state" SET DEFAULT 'WI';
COMMIT;
