export const copyToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        return true
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
        return false
    }
}
