import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import "./css/Settings.css";

const Settigs = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    document.title = "Settings Page";
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Nav />
      <div className="content">
        <div className="hnav">
          <span className="span1">
            <a href="#div1">General Setting</a>
          </span>
          <span className="span2">
            <a href="#div2">Update Admin Information</a>
          </span>
          <span className="span3">
            <a href="#div3">Change Language</a>
          </span>
        </div>

        <div id="div1">
          <section className="s1">
            <label>Website Name</label>
            <input type="text" />
            <section className="s2">
              <label>Website Logo</label>
              <input type="file" />
            </section>
            <section className="s3">
              <label>Change Color</label>
              <input type="color"/>
            </section>
            <button className="save2">Save</button>
          </section>
        </div>

        <div id="div2">
        <section className="s1">
            <label>User Name</label>
            <input type="text" />
            <section className="s2">
              <label>Admin Profile</label>
              <input type="file" />
            </section>
            <section className="s3">
              <label>Change Password</label>
              <input type="password"/>
            </section>
            <button className="save3">Save</button>
          </section>
        </div>

        <div id="div3">
          <div className="s4">
            <label className="l1">Choose Language:</label>
          <input type="radio" id="html" name="fav_language" value="English" />
<label for="html">English</label>
<input type="radio" id="css" name="fav_language" value="Arabic" />
<label for="css">Arabic</label>
          </div>
     

          
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Settigs;
