// src/admins/AdminRoutes.js
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import ReservationsList from "./pages/Reservations/ReservationsList";
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import Transactions from './pages/transactions/Transactions';
import FoodOrders from './pages/foodOrders/FoodOrders';
import FoodMenu from './pages/foodMenu/FoodMenu';
import Meals from './pages/meals/Meals';
import Profile from './pages/profile/Profile';
import Logout from './pages/logout/Logout';

function AdminRoutes() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/food-orders" element={<FoodOrders />} />
            <Route path="/food-menu" element={<FoodMenu />} />
            <Route path="/admin/reservations" element={<ReservationsList />} />
            <Route path="/meals" element={<Meals />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default AdminRoutes;
