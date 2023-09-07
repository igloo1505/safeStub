-- CreateTable
CREATE TABLE "Settings" (
    "id" SERIAL NOT NULL,
    "darkmode" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);
