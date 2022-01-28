import { Link } from 'react-router-dom'
import { storageDelete } from "../../utils/Storage"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"

const ProfileActions = () => {

    const { setUser } = useUser()

    const handleLogoutClick = () => {
        const doLogout = window.confirm('Are you sure?')
        if (doLogout) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    return (
        <ul>
            <li><Link to="/translation">Translations</Link></li>
            <li><button>Clear History</button></li>
            <li><button onClick={ handleLogoutClick }>Logout</button></li>
        </ul>

    )
}

export default ProfileActions