-- AlterTable
ALTER TABLE "Faq" ALTER COLUMN "body" SET NOT NULL,
ALTER COLUMN "body" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "TransactionUnbound" (
    "id" SERIAL NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "paymentId" TEXT NOT NULL,
    "sellerId" INTEGER NOT NULL,
    "buyerId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TransactionUnbound_pkey" PRIMARY KEY ("id")
);
