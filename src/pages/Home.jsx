import React, { useEffect, useState } from "react";
import "../App.css";
import aboutImage from "../assets/image.png";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.png";
import About from "./About";
import Services from "./Services";
import Appointment from "./Appointment";
import Contact from "./Contact";



export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", date: "", service: "Teeth Cleaning" });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hero Background Auto Slide
  const images = [hero1, hero2, hero3];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert("Appointment booked!"); };

  return (
    <div>
      {/* HERO SECTION */}
      <section
        id="home"
        className="hero"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Your Smile, <span className="highlight">Our Priority</span></h1>
            <p>Expert dental care for a confident and healthy smile.</p>
           


<div className="hero-buttons">
  <a href="#appointment" className="btn-primary">Book Appointment</a>
  <a href="#services" className="btn-outline">Our Services</a>
</div>


          </div>
        </div>
      </section>

  


<About/>
<Services/>
<Appointment/>
<Contact/>

      

     {/* FOOTER */}
{/* FOOTER */}
{/* <footer className="footer">
  <div className="footer-container">

    <div className="footer-left">
      <h2 className="footer-logo">Bright Smile 😊</h2>
      <p>Making your smile brighter & healthier every day.</p>
      <div className="footer-socials">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </div>

    <div className="footer-links">
      <h4>Quick Links</h4>
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#appointment">Appointment</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="footer-services">
      <h4>Our Services</h4>
      <p>🦷 Teeth Cleaning</p>
      <p>💉 Root Canal</p>
      <p>😁 Cosmetic Dentistry</p>
      <p>🪥 Braces & Aligners</p>
    </div>

    <div className="footer-hours">
      <h4>Opening Hours</h4>
      <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
      <p>Saturday: 10:00 AM - 6:00 PM</p>
      <p>Sunday: Closed</p>
    </div>

    <div className="footer-contact">
      <h4>Contact Us</h4>
      <p>📍 Near City Center, Jaipur, India</p>
      <p>📞 +91 98765 43210</p>
      <p>✉️ info@dentalclinic.com</p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} Bright Smile Dental Clinic. All Rights Reserved.</p>
    <div>
      <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
    </div>
  </div>
</footer> */}



    </div>
  );
}
