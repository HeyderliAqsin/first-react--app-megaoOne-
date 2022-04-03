import React from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../components/hero-slider/HeroSlider";
import "./Home.scss";

const Home = () => {
  const topImages = ["images/p1.jpg", "images/p3.jpg"];
  const downImages = ["images/photo.png", "images/photo1.png"];
  return (
    <>
      <section className="homeArea">
        <div className="container">
          <div className="row centerContent">
            <div className="col-md-10 col-lg-6 offset-md-1 offset-lg-6">
              <div className="greenBox">
                <div className="box-content">
                  <h1 className="wow fadeInUp">New Design Agency</h1>
                  <h1 className="wow fadeInUp">In Berlin</h1>
                  <br />
                  <Link to={"/"}>Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="servicesSec">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="heading-area">
                <h4 className="heading">
                  Creativity
                  <span> In Our Designs</span>
                </h4>
              </div>
            </div>
            <div className=" col-lg-7">
              <div className="image-holder">
                <img src="/images/service-img.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Slider">
        <HeroSlider
          width={"100%"}
          style={{ height: "100vh", objectFit: "cover" }}
          className="heroSlide"
          perView={1}
          images={topImages}
        />
        <div className="container">
          <div className="row">
            <div className="col-12 offset-md-5 col-lg-4 animate-fade">
              <div className="black-box">
                <h6 className="project-heading">Cocooil Branding Project </h6>
                <p className="project-text">
                  Donec quis nunc mollis, tincidunt mi vel. Donec quis nunc
                  mollis, tincidunt mi vel.
                </p>
                <Link to="/" className="btn btn-medium btn-rounded btn-white">
                  Launch Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="reviewSec">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="heading-area">
                <h4 className="heading wow slideInLeft">
                  Happy <span> Customers</span>
                </h4>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="image-holder wow slideInRight">
                <img src="/images/reviews.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="downSlide">
        <div className="container">
          <HeroSlider className="heroSlide" perView={1} images={downImages} />
          <div className="row">
            <div className="col-lg-3 name">
              <div className="client-img-holder"></div>
              <h5>Sara David Williams</h5>
              <p>Berlin Town</p>
            </div>
            <div class="col-lg-9 col-md-12 col-sm-12">
              <div class="icon-holder">
                <i class="fas fa-quote-left"></i>
              </div>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non
                rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim
                et mi. In at tempor purus.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="counters">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-12 col-lg-6 wow slideInLeft">
              <div className="greenBox">
                <div className="box-content">
                  <h4>Interesting Facts &amp; Figures</h4>
                  <h1>New Agency Stats</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce vitae egestas mi, vel dapibus diam mauris malesuada.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6 text-center wow slideInRight">
              <div className="counter">
                <h5 className="count">125</h5>
                <p>Happy Customers</p>
              </div>
              <div className="counter">
                <h5 className="count">865</h5>
                <p>Lines of Codes</p>
              </div>
              <div className="counter">
                <h5 className="count">510</h5>
                <p>Project Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-sec" id="contact">
        <div className="container expand-container">
          <div className="row align-items-center">
            <div className="col-12 col-md-12 col-lg-5 wow slideInLeft">
              <div className="heading-area">
                <h4 className="heading">
                  Questions? <span className="d-block"> Get in Touch</span>
                </h4>
              </div>
              <div className="contact-details">
                <ul>
                  <li>
                    <i aria-hidden="true" className="las la-paper-plane"></i>
                    email@website.com
                  </li>
                  <li>
                    <i aria-hidden="true" className="las la-phone"></i>
                    <span>+1 631 1234 5678</span>
                  </li>
                  <li>
                    <i aria-hidden="true" className="las la-map-marker"></i> 123
                    Park Avenue, New York
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-7 wow slideInRight">
              <form
                className="row contact-form row-padding"
                id="contact-form-data"
              >
                <div className="col-12 col-lg-10" id="result"></div>
                <div className="col-12 col-lg-10">
                  <input
                    type="text"
                    name="userName"
                    placeholder="Name"
                    className="form-control"
                  />
                  <input
                    type="text"
                    name="userPhone"
                    placeholder="Contact No"
                    className="form-control"
                  />
                  <input
                    type="email"
                    name="userEmail"
                    placeholder="Email"
                    className="form-control"
                  />
                  <textarea
                    className="form-control"
                    name="userMessage"
                    rows="6"
                    placeholder="Type Your Message Here"
                  ></textarea>
                  <Link to="/" className="btn btn-trans rounded-pill w-100">
                    Submit Information
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
