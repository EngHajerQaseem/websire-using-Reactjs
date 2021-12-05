import React, {useEffect } from 'react';
import Header from "../component/Header";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import PaginationTableComponent4 from './Pagination4';
import './css/Schools.css';

const Students=()=>
{
    useEffect(() => {
        document.title = "Student Page";
      }, []);
    return(
        <React.Fragment>
        <Header />
        <Nav />
        <div className="content">
           
            <PaginationTableComponent4/>

        </div>
            <Footer/>
            </React.Fragment>


    )
}
    
    
    


export default Students