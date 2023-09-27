-- CreateEnum
CREATE TYPE "TRANSACTIONSTATUS" AS ENUM ('awaitingIdVerification', 'idVerificationFailed', 'inProgress', 'complete');

-- CreateEnum
CREATE TYPE "PAYOUTMETHODS" AS ENUM ('paypal');
