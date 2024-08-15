// // // import React from "react";
// // // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // // import "bootstrap/dist/css/bootstrap.min.css";
// // // import Navigationbar from "./components/Navbar/Navbar"; // Global Navbar
// // // import Hero from "./Pages/LandingPage/Hero/Hero";
// // // import MealOfTheDay from "./Pages/MealOfTheDay/MealOfTheDay";
// // // import Chef from "./Pages/LandingPage/Chef/Chef";
// // // import Reservation from "./Pages/Reservation/Reservation";
// // // import AboutUs from "./Pages/About/About";
// // // import Login from "./components/Login/Login";
// // // import SignUp from "./components/SignUp/SignUp";
// // // import ContactUs from "./components/ContactUs/ContactUs";
// // // import MenuList from "./components/MenuPage/MenuList";
// // // import Footer from "./components/Footer/Footer";
// // // import Orders from "./components/Orders/Orders";
// // // import { OrderProvider } from "../src/components/Orders/Order";
// // // import SmokeRoutes from "./components/Smoke/SmokeRoutes"; // Import Smoke routes

// // // const App = () => (
// // //   <OrderProvider>
// // //     <Router>
// // //       <Routes>
// // //         {/* Global Routes */}
// // //         <Route
// // //           path="/"
// // //           element={
// // //             <>
// // //               <Navigationbar />
// // //               <Hero />
// // //               <Chef />
// // //               <Footer />
// // //             </>
// // //           }
// // //         />
// // //         <Route
// // //           path="/about"
// // //           element={
// // //             <>
// // //               <Navigationbar />
// // //               <AboutUs />
// // //               <Footer />
// // //             </>
// // //           }
// // //         />
// // //         <Route
// // //           path="/reservation"
// // //           element={
// // //             <>
// // //               <Navigationbar />
// // //               <Reservation />
// // //               <Footer />
// // //             </>
// // //           }
// // //         />
// // //         <Route
// // //           path="/meal-of-the-day"
// // //           element={
// // //             <>
// // //               <Navigationbar />
// // //               <MealOfTheDay />
// // //               <Footer />
// // //             </>
// // //           }
// // //         />
// // //         <Route
// // //           path="/login"
// // //           element={
// // //             <>
// // //               <Navigationbar />
// // //               <Login />
// // //               <Footer />
// // //             </>
// // //           }
// // //         />
// // //         <Route
// // //           path="/signup"
// // //           element={
// // //             <>
// // //               <Navigationbar />
// // //               <SignUp />
// // //               <Footer />
// // //             </>
// // //           }
// // //         />
// // //         <Route
// // //           path="/contact"
// // //           element={
// // //             <>
// // //               <Navigationbar />
// // //               <ContactUs />
// // //               <Footer />
// // //             </>
// // //           }
// // //         />
// // //         <Route
// // //           path="/menu"
// // //           element={
// // //             <>
// // //               <Navigationbar />
// // //               <MenuList />
// // //               <Footer />
// // //             </>
// // //           }
// // //         />
// // //         <Route
// // //           path="/orders"
// // //           element={
// // //             <>
// // //               <Navigationbar />
// // //               <Orders />
// // //               <Footer />
// // //             </>
// // //           }
// // //         />

// // //         {/* Smoke Routes - No Footer */}
// // //         <Route path="/smoke/*" element={<SmokeRoutes />} />
// // //       </Routes>
// // //     </Router>
// // //   </OrderProvider>
// // // );

// // // export default App;
// // import React from "react";
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import NavigationBar from "./components/Navbar/Navbar";
// // import Hero from "./Pages/LandingPage/Hero/Hero";
// // import Chef from "./Pages/LandingPage/Chef/Chef";
// // import Reservation from "./Pages/Reservation/Reservation";
// // import AboutUs from "./Pages/About/About";
// // import "./App.css";
// // import Footer from "./components/Footer/Footer";
// // import SignUp from "./components/SignUp/SignUp";
// // import MenuList from "./components/MenuPage/MenuList";
// // import Login from "./components/Login/Login";
// // import ContactUs from "./components/ContactUs/ContactUs";
// // import Orders from "./Pages/Orders/Orders";
// // import { OrderProvider } from "../src/Pages/Orders/Order"; // Import OrderProvider
// // import Notifications from "./components/Notifications/Notifications";
// // const App = () => (
// //   <OrderProvider>
// //     {" "}
// //     {/* Wrap your application with OrderProvider */}
// //     <Router>
// //       <NavigationBar /> {/* Add Navigationbar here to appear on every page */}
// //       <Routes>
// //         <Route
// //           path="/"
// //           element={
// //             <>
// //               <Hero />
// //               <Chef />
// //             </>
// //           }
// //         />
// //         <Route path="/about" element={<AboutUs />} />{" "}
// //         {/* About Us page route */}
// //         <Route path="/reservation" element={<Reservation />} />{" "}
// //         <Route path="/login" element={<Login />} />{" "}
// //         <Route path="/signup" element={<SignUp />} />{" "}
// //         <Route path="/contact" element={<ContactUs />} />{" "}
// //         <Route path="/menu" element={<MenuList />} />{" "}
// //         <Route path="/orders" element={<Orders />} />{" "}
// //         <Route path="/notifications" element={<Notifications />} />{" "}
// //       </Routes>
// //       <Footer />
// //     </Router>
// //   </OrderProvider>
// // );
// // export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar/Navbar";
import Hero from "./Pages/LandingPage/Hero/Hero";
import Chef from "./Pages/LandingPage/Chef/Chef";
import Reservation from "./Pages/Reservation/Reservation";
import AboutUs from "./Pages/About/About";
import "./App.css";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/SignUp/SignUp";
import MenuList from "./components/MenuPage/MenuList";
import Login from "./components/Login/Login";
import ContactUs from "./components/ContactUs/ContactUs";
import Orders from "./Pages/Orders/Orders";
import { OrderProvider } from "../src/Pages/Orders/Order";
import Notifications from "./components/Notifications/Notifications";
import BrunchRoutes from "./components/Brunch/BrunchRoutes";

const App = () => (
  <OrderProvider>
    {" "}
    {/* Wrap your application with OrderProvider */}
    <Router>
      <NavigationBar /> {/* Add NavigationBar here to appear on every page */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Chef />
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />{" "}
        {/* About Us page route */}
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/menu" element={<MenuList />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/brunch" element={<BrunchRoutes />} />{" "}
        {/* Updated path for brunch routes */}
      </Routes>
      <Footer /> {/* Move Footer outside of Routes */}
    </Router>
  </OrderProvider>
);

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import NavigationBar from "./components/Navbar/Navbar";
// import Hero from "./Pages/LandingPage/Hero/Hero";
// import Chef from "./Pages/LandingPage/Chef/Chef";
// import Reservation from "./Pages/Reservation/Reservation";
// import AboutUs from "./Pages/About/About";
// import "./App.css";
// import Footer from "./components/Footer/Footer";
// import SignUp from "./components/SignUp/SignUp";
// import MenuList from "./components/MenuPage/MenuList";
// import Login from "./components/Login/Login";
// import ContactUs from "./components/ContactUs/ContactUs";
// import Orders from "./Pages/Orders/Orders";
// import { OrderProvider } from "../src/Pages/Orders/Order";
// import Notifications from "./components/Notifications/Notifications";
// import BrunchRoutes from "./components/Brunch/BrunchRoutes";

// const App = () => (
//   <OrderProvider>
//     <Router>
//       <Routes>
//         {/* Routes with Navbar and Footer */}
//         <Route
//           path="/"
//           element={
//             <>
//               <NavigationBar />
//               <Hero />
//               <Chef />
//               <Footer />
//             </>
//           }
//         />
//         <Route
//           path="/about"
//           element={
//             <>
//               <NavigationBar />
//               <AboutUs />
//               <Footer />
//             </>
//           }
//         />
//         <Route
//           path="/reservation"
//           element={
//             <>
//               <NavigationBar />
//               <Reservation />
//               <Footer />
//             </>
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             <>
//               <NavigationBar />
//               <Login />
//               <Footer />
//             </>
//           }
//         />
//         <Route
//           path="/signup"
//           element={
//             <>
//               <NavigationBar />
//               <SignUp />
//               <Footer />
//             </>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <>
//               <NavigationBar />
//               <ContactUs />
//               <Footer />
//             </>
//           }
//         />
//         <Route
//           path="/menu"
//           element={
//             <>
//               <NavigationBar />
//               <MenuList />
//               <Footer />
//             </>
//           }
//         />
//         <Route
//           path="/orders"
//           element={
//             <>
//               <NavigationBar />
//               <Orders />
//               <Footer />
//             </>
//           }
//         />
//         <Route
//           path="/notifications"
//           element={
//             <>
//               <NavigationBar />
//               <Notifications />
//               <Footer />
//             </>
//           }
//         />

//         {/* Routes without Navbar and Footer */}
//         <Route path="/brunch/*" element={<BrunchRoutes />} />
//       </Routes>
//     </Router>
//   </OrderProvider>
// );

// export default App;
