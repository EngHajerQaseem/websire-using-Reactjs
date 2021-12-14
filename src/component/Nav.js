import React from "react";

import { Link } from "react-router-dom";

import './css/Nav.css';
import dashboard from './images/dashboard.png';
import school from './images/school.png';
import teacher from './images/teacher.png';
import parent from './images/parent.png';
import user from './images/user.png';
import student from './images/student.png';
import subject from './images/subject.png';
import classes from './images/class.png';
import test from './images/test.png';
import unit from './images/unit.png';
import achivement from './images/achivement.png';
import setting from './images/setting.png';
import manage from './images/manage.png';



const Nav = () => {
  return (

    <div className="navdiv">
      <div className="s-layout">

        <div classNameName="s-layout__sidebar">

          <Link className="s-sidebar__trigger" to="0">
          </Link>


          <nav className="s-sidebar__nav">
            <ul>
              <li>
                <Link to="#" className="logo">
                  <i className="fa fa-home"></i><em>Admin Panel </em>
                  

                </Link>
              </li>
              
              <hr />

              <li>
                <Link to="/Dashboard" className="s-sidebar__nav-link">
                  <img src={dashboard} className="img1" /><em>Dashboard</em>
                </Link>
              </li>
              <li>
                <Link to="/Schools" className="s-sidebar__nav-link">
                  <img src={school} className="img1" /><em>Schools</em>
                </Link>
              </li>

              <li>
                <Link to="/Teachers" className="s-sidebar__nav-link">
                  <img src={teacher} className="img1" /><em>Teachers</em>
                </Link>
              </li>

              <li>
                <Link to="/Parents" className="s-sidebar__nav-link">
                  <img src={parent} className="img1" /><em>Parents</em>
                </Link>
              </li>

              <li>
                <Link to="/Students" className="s-sidebar__nav-link">
                  <img src={student} className="img1" /><em>Students</em>
                </Link>
              </li>

              <li>
                <Link to="/Users" className="s-sidebar__nav-link">
                  <img src={user} className="img1" /><em>Users</em>
                </Link>
              </li>


              <li>
                <Link to="/Grades" className="s-sidebar__nav-link">
                  <img src={classes} className="img1" /><em>Grades</em>
                </Link>
              </li>

              <li>
                <Link to="/Subjects" className="s-sidebar__nav-link">
                  <img src={subject} className="img1" /><em>Subjects</em>
                </Link>
              </li>

              <li>
                <Link to="#" className="s-sidebar__nav-link">
                  <img src={test} className="img1" /><em>Test</em>
                </Link>
</li>
                <li>
                  <Link to="/Units" className="s-sidebar__nav-link">
                    <img src={unit} className="img1" /><em>Units</em>
                  </Link>
                  
              

                  <li>
                    <Link to="#" className="s-sidebar__nav-link">
                      <img src={achivement} className="img1" /><em>Achivement</em>
                    </Link>
                    
                   
                    <li>
                  <Link to="/Privilage" className="s-sidebar__nav-link">
                    <img src={manage} className="img1" /><em>Privilage</em>
                  </Link>
                    <li>
                      <Link to="/Settings" className="s-sidebar__nav-link">
                        <img src={setting} className="img1" /><em>Setting</em>
                      </Link>
                    </li>



                  </li>
                </li>
              </li>

            </ul>
          </nav>
        </div>


      </div>

    </div>
  );
};

export default Nav;
