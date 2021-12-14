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

  const user = { ID: "3", Name: "Hajer Qaseem", password: "user123" };
  const languages = [
    { ID: "1", Lang: "English" },
    { ID: "2", Lang: "Arabic" }
  ];

  return (
    <React.Fragment>
      <Header />
      <Nav />
      <div className="content">
      
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Settigs;
