import { httpBatchLink } from "@trpc/client";

export const HttpBatchLink = (ctx?: any) => {
    console.log("ctx in HttpBatchLink: ", ctx)
    if (ctx) {
        return [
            httpBatchLink({
                url: "/api/trpc",
                headers() {
                    if (!ctx?.req?.headers) {
                        console.log("No ctx...")
                        return {};
                    }
                    // To use SSR properly, you need to forward client headers to the server
                    // This is so you can pass through things like cookies when we're server-side rendering
                    console.log("Has ctx.req.headers...")
                    return {
                        ...ctx.req.headers
                    };
                }
            })
        ]
    }
    return [
        httpBatchLink({
            url: "/api/trpc",
            headers() {
                return {
                    ...ctx?.req?.headers
                }
            }
        })
    ]
}
