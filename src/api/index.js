// const apiKey = process.env.REACT_APP_API_KEY
const apiKey = 'xLZ/ENQNQUyhPD0eNtEGYw=='

export const createHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
    }
}
