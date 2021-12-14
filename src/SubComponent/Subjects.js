import React, { useEffect } from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import PaginationTableComponent6 from "./Pagination6";
import { Link } from "react-router-dom";
import "./css/Subjects.css";
import close from "./images/close.png";

const Subjects = () => {
  const grades = [
    { ID: "1", gradname: "First Grade" },
    { ID: "2", gradname: "Second Grade" },
    { ID: "3", gradname: "Third Grade" }

  ];

  useEffect(() => {
    document.title = "Subjects Page";
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Nav />

      <div className="content">
        <div id="box3">
          <div className="adds3">
            <b>Add Subject </b>
            <a href="#" className="close">
              <img src={close} />
            </a>
          </div>
          <div className="for1">
            <label>Subject Name</label>
            <input type="text" />
            
            <div className="for3">
            <label>Grade Name </label>
            
            <select>
            {grades.map((name)=>
                     <option>{name.gradname}</option>
                    
                
                )}
              
            </select>
          </div>
            
            <br />
            
            
            <button className="save2">Save</button>
          </div>
        </div>

        <a href="#box3" className="add">
          <button>Add Subject</button>
        </a>
        <div className="view">
          <PaginationTableComponent6 />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Subjects;
