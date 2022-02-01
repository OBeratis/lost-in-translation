import { createHeaders } from "."

const apiUrl = 'https://obe-assignment-api.herokuapp.com/translations'
// GET - Read records
// POST - Create new record
// PATCH - Update parts of the record
// DELETE - Removes a record
// PUT - Replaces entire record

// Functions for translation requests in DB
export const translationAdd = async (user, translation) => {
    try {
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: [...user.translations, translation]                    
            })
        })

        if (!response.ok)
        {
            throw new Error('Could not update translations')
        }

        const result = await response.json()
        return [ null, result ]

    } catch (e) {
        return [ e.message, null ]
    }
}

export const translationClearHistory = async (userId) => {
    try {
        const response = await fetch(`${apiUrl}/${userId}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not clear translations')    
        }

        const result = await response.json()
        return [ null, result] 
    } catch (e) {
        return [ e.message, null ]
    }
}