import { Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import SignInUp from "./pages/SignIn-Up";
import Profile from "./pages/Profile";
import Book from "./pages/Book";
import Favorites from "./pages/Favorites";
import HotelInfoFav from './pages/HotelInfo_Fav';
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/sign-in" />} />
            <Route path="/sign-in" element={<SignInUp signIn={true}/>} />
            <Route path="/sign-up" element={<SignInUp signIn={false}/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/hotel-info" element={<HotelInfoFav isFav={false} />} />
            <Route path="/hotel-fav" element={<HotelInfoFav isFav={true} />} />
            <Route path="/book" element={<Book />} />
            <Route path="/*"  element={<Navigate replace to="/home" />} />
            <Route path="/favs" element={<Favorites />} />
        </Routes>
    );
}