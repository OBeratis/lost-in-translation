import { Link } from 'react-router-dom'

const ProfileActions = () => {

    return (
        <ul>
            <li><Link to="/translation">Translations</Link></li>
            <li><button>Clear History</button></li>
            <li><button>Logout</button></li>
        </ul>

    )
}

export default ProfileActions