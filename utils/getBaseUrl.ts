export const getBaseUrl = () => {
    return process.env.VERCEL_URL
        ? process.env.VERCEL_URL
        : 'https://safe-stub.vercel.app';
}
