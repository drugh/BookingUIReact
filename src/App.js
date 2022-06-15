import Homepage from './Homepage';
import BookNow from './BookNow';
import BookingList from './BookingList';
import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add-booking" element={<BookNow />} />
          <Route path="/booking-list" element={<BookingList />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
