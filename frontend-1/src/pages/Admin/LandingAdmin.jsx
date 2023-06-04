import { Route, Routes } from 'react-router-dom';
import Navbar from '../../components/public/navbar';
import StudentList from './StudentList';
import NotFound from '../NotFound';
import Dashboard from '../Dashboard'
import RoomReservation from './RoomReservation';
import RoomList from './RoomList';
import BookReservation from './BookReservation';
import BookList from './BookList';
import RegistStudentAcc from './RegistStudentAcc';
import { useAuthContext } from '../../hooks/auth/useAuthContext';


const LandingAdmin = () => {
    return (
        <div className="max-h-screen">
            <Navbar />
            <div className="max-w-screen flex-row sm:flex">
                <div className='w-screen'>
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/admin/student' element={<StudentList />} />
                        <Route path="/admin/room" element={<RoomList />} />
                        <Route path="/admin/reservation" element={<RoomReservation />} />
                        <Route path="/admin/book" element={<BookList />} />
                        <Route path="/admin/rent" element={<BookReservation />} />
                        <Route path="/admin/regist" element={<RegistStudentAcc />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default LandingAdmin;