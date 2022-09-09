import { Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import SignInUp from "./pages/SignIn-Up";
import Profile from "./pages/Profile";
import Book from "./pages/Book";
import Favorites from "./pages/Favorites";
import HotelInfoFav from './pages/HotelInfo_Fav';
import { useContext } from 'react';
import { GoogleContext } from './context/googleContext';
import GuardedRoute from './components/CustomRoutes/GuardedRoute';
export default function App() {
    const { userGoogle, userSariri } = useContext(GoogleContext)


    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/sign-in" />} />
            <Route path="/sign-in" element={
                <GuardedRoute condition={!(userSariri && userGoogle)} redirectTo="/home" >
                    <SignInUp signIn={true}/>
                </GuardedRoute>
            } />
            <Route path="/sign-up" element={
                <GuardedRoute condition={!(userSariri && userGoogle)} redirectTo="/home" >
                    <SignInUp signIn={false}/>
                </GuardedRoute>
            } />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={
                <GuardedRoute condition={userSariri && userGoogle} redirectTo="/sign-in" >
                    <Profile />
                </GuardedRoute>
            } />
            <Route path="/hotel-info" element={<HotelInfoFav isFav={false} />} />
            <Route path="/hotel-fav" element={
                <GuardedRoute condition={userSariri && userGoogle} redirectTo="/sign-in" >
                    <HotelInfoFav isFav={true} />
                </GuardedRoute>
            } />
            <Route path="/book" element={<Book />} />
            <Route path="/*" element={<Navigate replace to="/home" />} />
            <Route path="/favs" element={
                <GuardedRoute condition={userSariri && userGoogle} redirectTo="/sign-in" >
                    <Favorites />
                </GuardedRoute>
            } />
        </Routes>
    );
}