import React from "react";
import DOCTOR from "./photos/bg5.jpg";
import HOSPITAL from "./photos/bg6.jpg";
import TREATMENT from "./photos/bg3.jpg";
import "./homePage.css";

class HomePage extends React.Component {
  componentDidMount() {
    this.showSlides(0);
    this.flag = 0;
  }

  componentWillUnmount() {
    this.showSlides(0);
    this.flag = 1;
  }

  showSlides = (slideIndex) => {
    if (this.flag) {
      return;
    }
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(() => {
      this.showSlides(slideIndex);
    }, 5000); // Change image every 5 seconds
  };

  render() {
    return (
      <div id="carousel">
        <div className="slides">
          <div className="slide">
            <img src={DOCTOR} alt="doc" />
            <h1 className="text">"Welcome to our pet clinic booking system, where caring for your furry companions is just a click away!"</h1>
          </div>
          <div className="slide">
            <img src={HOSPITAL} alt="hospital" />
            <h1 className="text">Book Appointments 24/7..!</h1>
          </div>
          <div className="slide">
            <img src={TREATMENT} alt="treatment" />
            <h1 className="text">Choose the best from the best...</h1>
          </div>
        </div>

        <div className="about-us">
          <h1>About Us</h1>
          <p>
            Welcome to our pet clinic booking system! We are dedicated to providing the best care for your furry companions. Our team of experienced and compassionate veterinarians is here to ensure the health and well-being of your pets.
          </p>
          <p>
            Our mission is to make it easy for you to book appointments and access high-quality pet care 24/7. We understand that your pets are a part of your family, and we treat them with the same love and respect.
          </p>
          <p>
            Whether you need routine check-ups, vaccinations, or emergency treatment, we are here to help. We strive to be the best in the business, so you can choose the best for your beloved pets.
          </p>
          <p>
            Thank you for choosing our services. We look forward to serving you and your pets. If you have any questions or need assistance, please don't hesitate to contact us.
          </p>
        </div>

        <div className="services">
          <h1>Our Services</h1>
          <p>
          A happy pet is always well-groomed and healthy! Your fur babies deserve the best treatment and it is our mission to make sure they get them here at PawPoint.
          </p>
          <ul>
            <li>Veterinary Check-ups</li>
            <li>Vaccinations</li>
            <li>Surgical Procedures</li>
            <li>Emergency Care</li>
            <li>Boarding Services</li>
            <li>Dental Care</li>
            {/* Add more services as needed */}
          </ul>
        </div>
      </div>
      
    );
  }
}

export default HomePage;
