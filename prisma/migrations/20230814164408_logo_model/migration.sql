-- CreateTable
CREATE TABLE "Logo" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "rel" TEXT[],
    "teamId" INTEGER,

    CONSTRAINT "Logo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Logo" ADD CONSTRAINT "Logo_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
