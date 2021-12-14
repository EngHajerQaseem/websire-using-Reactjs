import React,{useEffect} from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Nav from "../component/Nav";
import PaginationTableComponent8 from "./Pagination8";
import './css/Units.css';
import close from "./images/close.png";

const Units=()=>{
    const grades = [
        { ID: "1", gradname: "First Grade" },
        { ID: "2", gradname: "Second Grade" },
        { ID: "3", gradname: "Third Grade" }
    
      ];

      const subjects = [
        { ID: "1", subname: "Quran" },
        { ID: "2", subname: "Islamic" },
        { ID: "3", subname: "Arabic" }
    
      ];
  useEffect(() => {
    document.title = "Units Page";
  }, []);
    return(
        <React.Fragment>
            <Header/>
            <Nav/>
            <div className="content">
            <div id="box5">
          <div className="adds5">
            <b>Add Unit </b>
            <a href="#" className="close">
              <img src={close} />
            </a>
          </div>
          <div className="for5">
            <label>Unit Name</label>
            <input type="text" />
            
            <div className="for6">
            <label>Subject Name </label>
            
            <select>
            {subjects.map((name)=>
                     <option>{name.subname}</option>
                    
                
                )}
              
            </select>
          </div>

          <div className="for7">
          <label>Grade Name </label>
          <select>
          {grades.map((name)=>
                     <option>{name.gradname}</option>
                    
                
                )}
          </select>
          </div>
            
            <br />
            
            
            <button className="save2">Save</button>
          </div>
        </div>

        <a href="#box5" className="add">
          <button>Add Unit</button>
        </a>
        <div className="view">
          <PaginationTableComponent8 />
        </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Units