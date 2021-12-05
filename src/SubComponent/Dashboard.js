import React, { useEffect } from "react";


import "./css/Dashboard.css";
import Header from "../component/Header";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import user from './images/user.png';
import teacher from './images/teacher.png';
import parent from './images/parent.png';
import student from './images/student.png';
import school from './images/school.png';

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard Page";
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <div className="content">
        <div className="d">

          <div className="d01"> <img src={user} /> <span><b>32</b>User</span></div>

        </div>

        <div className="d2">
          <div className="d02"> <img src={school} /> <span><b>28</b>School</span></div>

        </div>

        <div className="d3">
          <div className="d03"> <img src={teacher} /> <span><b>130</b>Teacher</span></div>
        </div>

        <div className="d4">

          <div className="d04"> <img src={parent} /> <span><b>200</b>Parents</span></div>
        </div>

        <div className="d5">

          <div className="d05"> <img src={student} /> <span><b>4500</b>Student</span></div>
        </div>

        {/* Pie chart */}

       

      </div>



      {/* Footer */}

      <Footer />
    </React.Fragment>
  );
};
export default Dashboard;
