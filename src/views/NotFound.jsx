import { Link } from 'react-router-dom'

// Not found page implemented
const NotFound = () => {
    return (
        <main>
            <p>This page does not exist.</p>
            <Link to="/">Go Start</Link>
        </main>
    )
}

export default NotFound