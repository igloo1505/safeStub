-- DropForeignKey
ALTER TABLE "Arena" DROP CONSTRAINT "Arena_sectionImageId_fkey";

-- AlterTable
ALTER TABLE "Arena" ALTER COLUMN "sectionImageId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Arena" ADD CONSTRAINT "Arena_sectionImageId_fkey" FOREIGN KEY ("sectionImageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
