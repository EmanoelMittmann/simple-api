
export const INTERNAL_SERVER_ERROR = (message: string) => {
    return {
        code: 500,
        name: 'Internal Server Error',
        message
    }
}