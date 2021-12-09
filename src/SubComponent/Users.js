import React, { useEffect } from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import PaginationTableComponent5 from "./Pagination5";
import { Link } from "react-router-dom";
import "./css/Users.css";


const Users = () => {
  useEffect(() => {
    document.title = "Users Page";
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Nav />
      <div className="content">
        <div className="add">
        <Link to="/AddUser"><button>AddUser</button></Link>
        </div>
        
        <div className="view">
          <PaginationTableComponent5 />
        </div>
        <br />
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default Users;
