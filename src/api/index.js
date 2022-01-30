// const apiKey = process.env.REACT_APP_API_KEY
const apiKey = 'r7t0bX00iUa/0GuDX1nEwQ=='

export const createHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
    }
}
