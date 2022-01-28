export const storageSave = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const storageRead = key => {
    const data = localStorage.getItem(key)

    if (data && data !== 'undefined') {
        return JSON.parse(data)
    }

    return null
}
