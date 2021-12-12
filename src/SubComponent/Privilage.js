import React, { useEffect } from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import "./css/Privilage.css";
const Privilage = () => {
  useEffect(() => {
    document.title = "Privilage Page";
  }, []);
  const Umanage = [
    { ID: "1", Manage: "Add User" },
    { ID: "2", Manage: "Edit User" },
    { ID: "3", Manage: "Delete User" },
    { ID: "4", Manage: "View User" },
  ];
  const Scmanage = [{ ID: "1", Manage: "View School" }];

  const Tecmanage = [{ ID: "1", Manage: "View Teacher" }];

  const Pcmanage = [{ ID: "1", Manage: "View Parent" }];

  const Stcmanage = [{ ID: "1", Manage: "View Student" }];
  const Smanage = [
    { ID: "1", Manage: "Add Subject" },
    { ID: "2", Manage: "Edit Subject" },
    { ID: "3", Manage: "Delete Subject" },
    { ID: "4", Manage: "View Subject" },
  ];

  const Gmanage = [
    { ID: "1", Manage: "Add Grade" },
    { ID: "2", Manage: "Edit Grade" },
    { ID: "3", Manage: "Delete Grade" },
    { ID: "4", Manage: "View Grade" },
  ];

  const Tmanage = [
    { ID: "1", Manage: "Add Test" },
    { ID: "2", Manage: "Edit Test" },
    { ID: "3", Manage: "Delete Test" },
    { ID: "4", Manage: "View Test" },
  ];

  const Umanage2 = [
    { ID: "1", Manage: "Add Units" },
    { ID: "2", Manage: "Edit Units" },
    { ID: "3", Manage: "Delete Units" },
    { ID: "4", Manage: "View Units" },
  ];

  const Amanage = [
    { ID: "1", Manage: "Add Achivement" },
    { ID: "2", Manage: "Edit Achivement" },
    { ID: "3", Manage: "Delete Achivement" },
    { ID: "4", Manage: "View Achivement" },
  ];

  return (
    <React.Fragment>
      <Header />
      <Nav />
      <div className="content">
        <div className="input">
          <label>Roll Name</label> <input type="text" />
        </div>
        <div className="maint">
          <div className="t1">
            <p>User Management</p>

            {Umanage.map((item, id) => {
              return (
                <div className="d1">
                  <span>
                    <input type="checkbox" /> {item.Manage}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="t1">
            <p>School Management</p>

            {Scmanage.map((item, id) => {
              return (
                <div className="d1">
                  <span>
                    <input type="checkbox" /> {item.Manage}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="t1">
            <p>Teacher Management</p>

            {Tmanage.map((item, id) => {
              return (
                <div className="d1">
                  <span>
                    <input type="checkbox" /> {item.Manage}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="t1">
            <p>Parent Management</p>

            {Pcmanage.map((item, id) => {
              return (
                <div className="d1">
                  <span>
                    <input type="checkbox" /> {item.Manage}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="t1">
            <p>Student Management</p>

            {Stcmanage.map((item, id) => {
              return (
                <div className="d1">
                  <span>
                    <input type="checkbox" /> {item.Manage}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="t1">
            <p>Grade Management</p>

            {Gmanage.map((item, id) => {
              return (
                <div className="d1">
                  <span>
                    <input type="checkbox" /> {item.Manage}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="t1">
            <p>Test Management</p>

            {Tmanage.map((item, id) => {
              return (
                <div className="d1">
                  <span>
                    <input type="checkbox" /> {item.Manage}
                  </span>
                </div>
              );
            })}

            <div className="t1">
              <p>Units Management</p>

              {Umanage2.map((item, id) => {
                return (
                  <div className="d1">
                    <span>
                      <input type="checkbox" /> {item.Manage}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="t1">
              <p>Achivement Management</p>

              {Amanage.map((item, id) => {
                return (
                  <div className="d1">
                    <span>
                      <input type="checkbox" /> {item.Manage}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="t2">
              <button>Save Changes</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Privilage;
