import React from "react";
import "../assets/scss/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import empathy from "../assets/images/empathy.jpg";
import meetingtime from "../assets/images/meetingtime.jpg";
import online from "../assets/images/online.jpg";
import teacherkit from "../assets/images/teacherkit.jpg";
import networking from "../assets/images/networking.jpg";
import collab from "../assets/images/collab.jpg";
import industry from "../assets/images/ind.jpg";
import digvideo from "../assets/images/digvideo.jpg";
import award from "../assets/images/award.png";
import money from "../assets/images/money.png";
import material from "../assets/images/material.png";

const Home = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleClickHere = (resource) => {
    if (isAuthenticated) {
      // If user is logged in, navigate to the corresponding resource
      switch (resource) {
        case "ebook":
          navigate("/ebook");
          break;
        case "lms":
          navigate("/lms");
          break;
        case "online":
          navigate("/online-training");
          break;
        case "offline":
          navigate("/offline-training");
          break;

        case "networking":
          navigate("/networking");
          break;

        case "collaborative":
          navigate("/collaborative-projects");
          break;

        case "industry":
          navigate("/industry");
          break;
        case "digivideo":
          navigate("/digital-videos");
          break;

        default:
          navigate("/ebook");
      }
    } else {
      // If user is not logged in, navigate to subscription page
      navigate("/subscription");
    }
  };

  // const SampleNextArrow = (props) => {
  //   const { onClick } = props;
  //   return (
  //     <div
  //       className="slick-arrow"
  //       onClick={onClick}
  //       style={{
  //         position: "absolute",
  //         right: "-25px",
  //         top: "50%",
  //         transform: "translateY(-50%)",
  //         zIndex: 1,
  //         cursor: "pointer",
  //         fontSize: "24px",
  //         color: "#007bff",
  //       }}
  //     >
  //       <i className="fa fa-chevron-right"></i>
  //     </div>
  //   );
  // };

  // const SamplePrevArrow = (props) => {
  //   const { onClick } = props;
  //   return (
  //     <div
  //       className="slick-arrow"
  //       onClick={onClick}
  //       style={{
  //         position: "absolute",
  //         left: "-25px",
  //         top: "50%",
  //         transform: "translateY(-50%)",
  //         zIndex: 1,
  //         cursor: "pointer",
  //         fontSize: "24px",
  //         color: "#007bff",
  //       }}
  //     >
  //       <i className="fa fa-chevron-left"></i>
  //     </div>
  //   );
  // };

  return (
    <>
      <Header />

      {/* Hero Section */}

      <div className="jumbotron jumbotron-fluid position-relative overlay-bottom">
        <div className="container text-center my-5 py-5">
          <h1 className="text-white display-1 mb-5">
            Impact Bharath<span className="fs-20"></span>
          </h1>
        </div>
      </div>

      <div className="container-fluid bg-image"></div>

      <div className="client_section container">
        <div className="box">
          <div className="img-box">
            <img src={empathy} alt="Digital Libraries" />
          </div>
          <div className="detail-box">
            <div className="client_info">
              <div className="client_name">
                <h5>Why Attend IMPACT BHARATH?</h5>
                <h6>
                  Explore <strong>real-world changemaking stories</strong> to inspire students<br/>
                  Learn to embed <strong>values, empathy, SDGs & social innovation</strong> in your subject<br/>
                  Receive <strong>practical tools, discussion prompts, and classroom projects</strong><br/>
                  Align with <strong>NEP 2020, SEL (Social Emotional Learning)</strong>, and global competencies<br/>
                </h6>
              </div>
            </div>
            {/* <a
              className="btn btn-primary mt-5 text-center"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClickHere("ebook");
              }}
            >
              View Details
            </a> */}
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={meetingtime} alt="LMS" />
          </div>
          <div className="detail-box">
            <div className="client_info">
              <div className="client_name">
                <h5>A Weekly Online Empowerment Series for Educators</h5>
                <h6>📅 Every Saturday<br/>
                    🕒 Time: 5:00 PM – 6:00<br/>
                    📍 Live on: Google Meet<br/>
                    🎓 For Teachers of Grades 6 to 12<br/>
                    🧾 E-Certificates for Participation
                </h6>
              </div>
            </div>
            <a
              className="btn btn-primary mt-2 text-center"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClickHere("online");
              }}
            >
              View Details
            </a>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={online} alt="Online Workshops" />
          </div>
          <div className="detail-box">
            <div className="client_info">
              <div className="client_name">
                <h5>Weekly Themes & Contemporary Impact Topics for Teachers</h5>
                <h6>
                  These weekly sessions will revolve around <strong>social impact, youth leadership, SDGs (Sustainable Development Goals), ethics, and innovation</strong>, all tied to subjects and pedagogies teachers already use
                </h6>
              </div>
            </div>
            <a
              className="btn btn-primary mt-3 text-center"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClickHere("offline");
              }}
            >
              View Details
            </a>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={teacherkit} alt="Offline Workshops" />
          </div>
          <div className="detail-box">
            <div className="client_info">
              <div className="client_name">
                <h5>Teaching Toolkit</h5>
                <h6><b>Slide Decks:</b> Editable for each theme. </h6> 
                <h6><b>Reflection Cards:</b> Printable for classrooms</h6>
                <h6><b>Canva Templates:</b> Posters, certificates, session reminders.</h6> 
                <h6><b>Assessment Rubrics:</b> For impact-based student projects. Student</h6> 
                <h6><b>Journals:</b> “My Changemaker Diary” printable workbook</h6>
              </div>
            </div>
            {/* <a
              className="btn btn-primary mt-5 text-center"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClickHere("offline");
              }}
            >
              View Details
            </a> */}
          </div>
        </div>
        {/* <div className="box">
          <div className="img-box">
            <img src={networking} alt="Networking" />
          </div>
          <div className="detail-box">
            <div className="client_info">
              <div className="client_name">
                <h5>Networking events</h5>
                <h6>Meet industry experts, educators, and innovators</h6>
              </div>
            </div>
            <a
              className="btn btn-primary mt-5 text-center"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClickHere("networking");
              }}
            >
              View Details
            </a>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={collab} alt="Collaborative Projects" />
          </div>
          <div className="detail-box">
            <div className="client_info">
              <div className="client_name">
                <h5>Collaborative projects</h5>
                <h6>Joint research projects, student exchange programs</h6>
              </div>
            </div>
            <a
              className="btn btn-primary mt-5 text-center"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClickHere("collaborative");
              }}
            >
              View Details
            </a>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={industry} alt="Industry" />
          </div>
          <div className="detail-box">
            <div className="client_info">
              <div className="client_name">
                <h5>Industry partnerships</h5>
                <h6>
                  Internships, job placements, collaborative research projects
                </h6>
              </div>
            </div>
            <a
              className="btn btn-primary mt-5 text-center"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClickHere("industry");
              }}
            >
              View Details
            </a>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={digvideo} alt="Digital Videos" />
          </div>
          <div className="detail-box">
            <div className="client_info">
              <div className="client_name">
                <h5>Digital Videos</h5>
                <h6>
                  Access to thousands of videos for educational and, training
                </h6>
              </div>
            </div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleClickHere("digivideo");
              }}
              className="btn btn-primary mt-5 text-center"
            >
              View Details
            </a>
          </div>
        </div> */}
      </div>
      {/* <div className="container">
        <div className="section-title text-center">
          <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2 my-4">
            Additional Incentives
          </h6>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="incentive-box">
              <div className="text-center">
                <img width="100px" src={award} alt="Awards" />
              </div>
              <h4>Recognition & Awards</h4>
              <p>
                National-level recognition for outstanding educators or
                institutions.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="incentive-box">
              <div className="text-center">
                <img width="100px" src={money} alt="Funding" />
              </div>
              <h4>Funding Opportunities</h4>
              <p>
                Grants for research projects, infrastructure development, and
                innovation initiatives.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="incentive-box">
              <div className="text-center">
                <img width="100px" src={material} alt="Resources" />
              </div>
              <h4>Resource Sharing</h4>
              <p>Educational materials, equipment, or funding</p>
            </div>
          </div>
        </div>
      </div> */}

      <Footer />
    </>
  );
};

export default Home;
