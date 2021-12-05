import React, {useEffect } from 'react';
import Header from "../component/Header";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import PaginationTableComponent2 from './Pagination.2';
import './css/Schools.css';

const Teachers=()=>
{
    useEffect(() => {
        document.title = "Teacher Page";
      }, []);
    return(
        <React.Fragment>
        <Header />
        <Nav />
        <div className="content">
           
            <PaginationTableComponent2/>

        </div>
            <Footer/>
            </React.Fragment>


    )
}
    
    
    


export default Teachers