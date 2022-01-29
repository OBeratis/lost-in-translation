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

export const storageDelete = key => {
    localStorage.removeItem(key)
}

/*
export const storageSave = (key, value) => {
    if (!key && typeof key !== 'string') {
        throw new Error('storageSave: No storage key provided')
    }

    if (!value) {
        throw new Error('storageSave: No value provided for ' + value)
    }

    sessionStorage.setItem(key, JSON.stringify(value))
}

export const storageRead = key => {
    if (!key && typeof key !== 'string') {
        throw new Error('storageSave: No storage key provided')
    }

    const data = sessionStorage.getItem(key)

    if (data && data !== 'undefined') {
        return JSON.parse(data)
    }

    return null
}

export const storageDelete = key => {
    if (!key && typeof key !== 'string') {
        throw new Error('storageSave: No storage key provided')
    }

    sessionStorage.removeItem(key)
}
*/
