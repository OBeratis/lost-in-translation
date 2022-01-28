import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <main>
            <p>This page does not exist.</p>
            <Link to="/">Go Start</Link>
        </main>
    )
}

export default NotFound