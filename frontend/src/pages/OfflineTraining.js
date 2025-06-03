import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OfflineTrainingImg from "../assets/images/offlinetraining.jpeg";

const OfflineTraining = () => {
  const { isAuthenticated, currentUser, hasSubscription } = useAuth();
  const navigate = useNavigate();
  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/subscription");
    }
  }, [isAuthenticated, navigate]);
  const handleClickHere = () => {
    if (isAuthenticated) {
      // If user is logged in, navigate to the corresponding resource
      navigate("/subscription-form");
    }
  };
  return (
    <>
      <Header />
      <div className="container-fluid py-5">
        <div className="container-fluid py-5">
          <div className="container py-5">
            <h2 className=" text-warning mb-4">
              🏫 Weekly Themes & Contemporary Impact Topics for Teachers
            </h2>
            {/* <p className="text-center mb-5">
              Meet fellow students and educators face-to-face in your area.
            </p> */}
            {/* <div className="col-md-6 text-center training-img">
              <img src={OfflineTrainingImg} alt="Online Training" />
            </div> */}

            {/* <ul className="list-group shadow mt-4">
              <li className="list-group-item">
                <strong>May 29, 2025:</strong> STEM Workshop – Lincoln High
                School, NY
              </li>
              <li className="list-group-item">
                <strong>June 3, 2025:</strong> Project Showcase – Community
                Learning Center, LA
              </li>
            </ul> */}
            <h5 className="mt-4">The Power of Local: Grassroots Changemakers from India</h5>
            <div>Why It Matters: Stories of real Indian youth driving sanitation, education, or health projects</div>
            <div>Teaching Strategy: Use case-based learning; build “My Community Impact Plan” projects</div>
            <div>Activity: Have students research & present on a young Indian changemaker</div>
            <div>Examples: Barefoot College (Rajasthan), Garbage Clinic (Indore)</div>

            <h5 className="mt-4">Teaching the UN Sustainable Development Goals (SDGs) in Everyday Subjects</h5>
            <div>Why It Matters: NEP 2020 aligns with global citizenship education</div>
            <div>Methodology: Embed SDGs into science (climate), math (sustainable cities), language (values)</div>
            <div>Activity: SDG bulletin board + “Adopt-an-SDG” classroom challenge</div>
            <div>Resources: UNESCO SDG toolkit for schools</div>

            <h5 className="mt-4">Building Student Leaders: How to Teach Problem-Solving & Initiative</h5>
            <div>Focus: Enable students to identify, research, and act on real issues</div>
            <div>Methods: Inquiry-based learning, student-led clubs, project-based assessment</div>
            <div>Activity: “Design Your Solution” classroom pitch day</div>
            <div>Inspiration: Young Leaders for Active Citizenship (YLAC), Ashoka Youth Venture</div>

            <h5 className="mt-4">Responsible Digital Citizenship & Cyber Empathy</h5>
            <div>Why It’s Critical: Rising cyberbullying, misinformation, tech addiction</div>
            <div>Pedagogy: Social-emotional learning + media literacy</div>
            <div>Activity: Host a class debate on AI ethics or social media use</div>
            <div>Tools: Google’s “Be Internet Awesome,” CBSE Cyber Safety Handbook</div>

            <h5 className="mt-4">Climate Action & Environmental Stewardship in Classrooms</h5>
            <div>Core Idea: Make sustainability a habit, not just a chapter</div>
            <div>Teaching Tools: Carbon footprint trackers, eco diaries, school gardens</div>
            <div>Student Projects: “Green School Report” or “Trash to Treasure” innovation contests</div>
            <div>Resources: Earth Day Network India, TERI Education resources</div>

            <h5 className="mt-4">Mental Health, Inclusion & Empathy: Equipping Teachers to Build Safe Spaces</h5>
            <div>Need: Rising anxiety, peer pressure, and exclusion among youth</div>
            <div>Approach: Weekly check-ins, emotion wheels, kindness journaling</div>
            <div>Activity: Conduct a “Gratitude Circle” or “Empathy Walk”</div>
            <div>Support: NIMHANS School Mental Health Toolkit</div>

            <h5 className="mt-4">Innovators of India: Teaching Impact through STEM & Startups</h5>
            <div>Highlight: Young Indian inventors and startup founders creating global impact</div>
            <div>Pedagogical Link: Tie in with science, economics, business studies</div>
            <div>Activity: Startup simulation game or Shark Tank-style pitch contest</div>
            <div>Examples: Tilak Mehta (Paper-N-Parcel), NITI Aayog’s Atal Innovation Mission</div>

            <h5 className="mt-4">Values in Action: Teaching Ethics, Harmony & Leadership through Indian Thinkers</h5>
            <div>Scope: Gandhiji, Dr. A.P.J. Abdul Kalam, Sudha Murthy, Sonam Wangchuk</div>
            <div>Method: Life story journals, quote-based discussions, value trees</div>
            <div>Activity: “Lead Like Kalam” or “My Ethics Code” reflective writing task</div>
            <div>Resources: NCERT value education guides, MyGov value-based stories</div>
          </div>
        </div>

        {isAuthenticated && !hasSubscription && (
          <div className="text-center mt-4">
            {/* <button
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                handleClickHere();
              }}
            >
              Enroll in UNS for this facility
            </button> */}
          </div>

          //  : (
          //   <a
          //     href="https://docs.google.com/forms/d/e/1FAIpQLScDm7aodpA71cr0mAqn7uf844lpWLvsu3vkOxSNd7q7YDEszA/viewform?usp=dialog"
          //     target="_blank"
          //     rel="noopener noreferrer"
          //   >
          //     Join Now
          //   </a>
        )}
      </div>

      <Footer />
    </>
  );
};

export default OfflineTraining;
