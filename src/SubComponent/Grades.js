import React, { useEffect } from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import PaginationTableComponent7 from "./Pagination7";
import { Link } from "react-router-dom";
import "./css/Subjects.css";
import close from "./images/close.png";

const Grades = () => {
  useEffect(() => {
    document.title = "Grade Page";
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Nav />

      <div className="content">
        <div id="box">
          <div className="adds">
            <b>Add Grade</b>
            <a href="#" className="close">
              <img src={close} />
            </a>
          </div>
          <div className="for1">
            <label>Grade Name</label>
            <input type="text" />
            <br />
            <br />
            
            <button className="save2">Save</button>
          </div>
        </div>

        <a href="#box" className="add">
          <button>Add Grade</button>
        </a>
        <div className="view">
          <PaginationTableComponent7 />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Grades;
