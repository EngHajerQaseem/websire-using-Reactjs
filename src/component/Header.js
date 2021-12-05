import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../LoginComponent/Login';
import './css/Header.css';
import adminImage from './images/admin.png';
import logout from './images/logout.png';


const Header = () => {
  return (


    <div className="header">
      <section className="home-section">
        <nav>
          <div className="search-box">


            <input type="text" placeholder="Search..." />

          </div>

          <div className="profile-details">

            <img src={adminImage} alt="" />

            <span className="admin_name">Hajer Qaseem</span>

          </div>
          <div className="logout">
         <Link to="/" >  <img src={logout} /> </Link>
          </div>
        </nav>




      </section>

    </div>




  )
}

export default Header