import type { serverClient } from "#/trpc/serverClient";

export const getTransactionUniqueId = (transaction: NonNullable<Awaited<ReturnType<typeof serverClient.getTransactionDetails>>>) => {
    return Boolean(transaction?.ticketGroups && transaction?.ticketGroups?.length > 0) ? transaction?.ticketGroups[0].confirmationId : transaction?.tickets?.[0].transactionId || ""
}
