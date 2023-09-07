import { PrismaClient } from '@prisma/client'
import Stripe from 'stripe';
const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        log: ['error'],
    })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma


export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2022-11-15',
});
