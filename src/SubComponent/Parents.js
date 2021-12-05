import React, {useEffect } from 'react';
import Header from "../component/Header";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import PaginationTableComponent3 from './Pagination.3';
import './css/Schools.css';

const Parents=()=>
{
    useEffect(() => {
        document.title = "Parents Page";
      }, []);
    return(
        <React.Fragment>
        <Header />
        <Nav />
        <div className="content">
           
            <PaginationTableComponent3/>

        </div>
            <Footer/>
            </React.Fragment>


    )
}
    
    
    


export default Parents