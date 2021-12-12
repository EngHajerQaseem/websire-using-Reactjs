import React,{useEffect} from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import './css/Settings.css';


const Settigs=()=>{
    useEffect(() => {
        document.title = "Settings Page";
      }, []);
    return(
       <React.Fragment>
           <Header/>
           <Nav/>
        <div className="content">
            <div class="setting">
                
            </div>
            
        </div>

        <Footer/>
        </React.Fragment>
    )
}

export default Settigs