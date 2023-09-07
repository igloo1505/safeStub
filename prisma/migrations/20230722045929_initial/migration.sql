-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('USER', 'ADMIN', 'BANNED', 'EMPLOYEE');

-- CreateEnum
CREATE TYPE "AMENITIY" AS ENUM ('total', 'partial', 'none');

-- CreateEnum
CREATE TYPE "PARKING" AS ENUM ('limited', 'valet', 'withTicket', 'offstreet');

-- CreateEnum
CREATE TYPE "CATEGORY" AS ENUM ('MUSIC', 'SPORTS', 'COMEDY');

-- CreateTable
CREATE TABLE "User" (
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "ROLE" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paymentAccountDetailsId" INTEGER NOT NULL,
    "purchaseHistoryId" INTEGER NOT NULL,
    "verified" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "category" "CATEGORY" NOT NULL,
    "arenaId" INTEGER NOT NULL,
    "amenitiesId" INTEGER NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TicketGroup" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER,
    "seatedTogether" BOOLEAN NOT NULL,

    CONSTRAINT "TicketGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER,
    "ticketGroupId" INTEGER,
    "arenaSectionId" INTEGER NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArenaSection" (
    "id" SERIAL NOT NULL,
    "arenaId" INTEGER NOT NULL,

    CONSTRAINT "ArenaSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArenaAmenities" (
    "id" SERIAL NOT NULL,
    "indoor" "AMENITIY" NOT NULL DEFAULT 'partial',
    "covered" "AMENITIY" NOT NULL DEFAULT 'partial',
    "outdoor" "AMENITIY" NOT NULL DEFAULT 'partial',
    "food" BOOLEAN NOT NULL DEFAULT true,
    "alcohol" BOOLEAN NOT NULL DEFAULT true,
    "parking" "PARKING" NOT NULL DEFAULT 'limited',
    "shuttleAvailable" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ArenaAmenities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Arena" (
    "id" SERIAL NOT NULL,
    "arenaAmenitiesId" INTEGER NOT NULL,

    CONSTRAINT "Arena_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentAccountDetails" (
    "id" SERIAL NOT NULL,
    "nameOnAccount" TEXT NOT NULL,

    CONSTRAINT "PaymentAccountDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "paymentId" TEXT NOT NULL,
    "sellerId" INTEGER NOT NULL,
    "buyerId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseHistory" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "PurchaseHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_paymentAccountDetailsId_fkey" FOREIGN KEY ("paymentAccountDetailsId") REFERENCES "PaymentAccountDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_purchaseHistoryId_fkey" FOREIGN KEY ("purchaseHistoryId") REFERENCES "PurchaseHistory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_arenaId_fkey" FOREIGN KEY ("arenaId") REFERENCES "Arena"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_amenitiesId_fkey" FOREIGN KEY ("amenitiesId") REFERENCES "ArenaAmenities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TicketGroup" ADD CONSTRAINT "TicketGroup_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_ticketGroupId_fkey" FOREIGN KEY ("ticketGroupId") REFERENCES "TicketGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_arenaSectionId_fkey" FOREIGN KEY ("arenaSectionId") REFERENCES "ArenaSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArenaSection" ADD CONSTRAINT "ArenaSection_arenaId_fkey" FOREIGN KEY ("arenaId") REFERENCES "Arena"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Arena" ADD CONSTRAINT "Arena_arenaAmenitiesId_fkey" FOREIGN KEY ("arenaAmenitiesId") REFERENCES "ArenaAmenities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "PurchaseHistory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "PurchaseHistory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
