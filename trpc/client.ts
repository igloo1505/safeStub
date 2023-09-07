"use client"
import { type AppRouterType } from '#/trpc'
import { createTRPCReact } from '@trpc/react-query'
export const trpc = createTRPCReact<AppRouterType>({})
import { createTRPCProxyClient } from '@trpc/client';
import { HttpBatchLink } from './batchLink';




export const client = createTRPCProxyClient<AppRouterType>({
    links: HttpBatchLink(),
});

