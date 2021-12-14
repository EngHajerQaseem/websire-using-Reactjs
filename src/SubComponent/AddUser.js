import React, { useEffect } from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import "./css/Users.css";
import Add from "./images/add.png";

const AddUser = () => {
  useEffect(() => {
    document.title = "Add User Page";
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <div className="content">
        <div className="divadd">
          <div className="caption">
            <img src={Add} /> Add User
          </div>
          <div className="form">
            <label>User Name </label>
            <input type="text" />
          </div>
          <div className="f1">
            <label>Gender </label>
            <select>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="form2">
            <label>Password</label>
            <input type="password" />
          </div>
          <div className="form3">
            <label>Confirm Password </label>
            <input type="password" />
          </div>

          <div className="form4">
            <label>Roll </label>
            <select>
              <option></option>
              <option></option>
            </select>
          </div>
          <br />
          <br />

          <div className="Save">
            <Link to="/Users">
              {" "}
              <button className="save1">Cancel</button>
            </Link>
            <Link to="/Users">
              <button className="cancel">Save</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AddUser;
