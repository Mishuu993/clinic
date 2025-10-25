// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Components
// import Navbar from "./components/Navbar";
// // import Hero from "./components/Hero";
// import About from "./pages/About.jsx";
// import Services from "./pages/Services.jsx";
// import Appointment from "./pages/Appointment.jsx";
// import Contact from "./pages/Contact.jsx";
// import Login from "./pages/Login.jsx";

// // Pages
// import Home from "./pages/Home";

// function App() {
//   return (
//     <Router>
//       <Navbar />

//       <Routes>
//         {/* Home Page (contains all sections) */}
//         <Route path="/" element={<Home />} />

//         {/* Optional: direct routes for sections */}
//         <Route path="/login" element={<Login/>}/>
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/appointment" element={<Appointment />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>

      
//     </Router>
//   );
// }

// export default App;
















import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Footer from "./pages/footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home page always open */}
        <Route path="/" element={<Home />} />

        {/* Public pages */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* Protected pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
