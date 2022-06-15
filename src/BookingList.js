import Footer from "./Footer";
import Header from "./Header";
import Items from "./Items";
import './BookingList.css';


function BookingList() {
    

    return (
        
        <div className="booking-list">
            <Header />
            <h1>Booking list items</h1>
            <Items />
            <Footer />
        </div>
    
    );
}

export default BookingList;