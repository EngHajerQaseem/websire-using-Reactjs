import React, {useEffect } from 'react';
import Header from "../component/Header";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import PaginationTableComponent from './Pagination';
import './css/Schools.css';

const Schools=()=>
{
    useEffect(() => {
        document.title = "School Page";
      }, []);
    return(
        <React.Fragment>
        <Header />
        <Nav />
        <div className="content">
           
            <PaginationTableComponent/>

        </div>
            <Footer/>
            </React.Fragment>


    )
}
    
    
    


export default Schools