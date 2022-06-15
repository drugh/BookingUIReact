import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHiking } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"

function Header() {

    return (<header className="header">
        <div className='container'>
            <FontAwesomeIcon icon={faHiking} />HIKEBUDDY
        </div>
        <nav className='nav-bar'>
            <a href='/'>Home</a>
            <a href="/add-booking">Book Now</a>
            <a href="/booking-list">Booking List</a>
        </nav>
    </header>);
}

export default Header;