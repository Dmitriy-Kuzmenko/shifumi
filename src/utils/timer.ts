export const timer = async (ms: number) => {
    await new Promise(resolve => setTimeout(resolve, ms))
}