import { Link } from 'react-router-dom'
import { storageDelete, storageSave } from "../../utils/Storage"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { translationClearHistory } from '../../api/store'

const ProfileActions = () => {

    const { user, setUser } = useUser()

    const handleLogoutClick = () => {
        const doLogout = window.confirm('Are you sure?')
        if (doLogout) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    const handleClearHistoryClick = async () => {
        const doClearHistory = window.confirm('Clear translations history.\nAre you sure?')
        if (!doClearHistory) {
            return
        }

        /*
        const [ clearError ] = await translationClearHistory(user.id)
        if (clearError !== null) {
            return
        }
        */
       
        const updatedUser = {
            ...user,
            translations: []
        }

        setUser(updatedUser)
        storageSave(STORAGE_KEY_USER, updatedUser)
    }

    return (
        <ul>
            <li><Link to="/translation">Translations</Link></li>
            <li><button onClick={ handleClearHistoryClick }>Clear History</button></li>
            <li><button onClick={ handleLogoutClick }>Logout</button></li>
        </ul>

    )
}

export default ProfileActions