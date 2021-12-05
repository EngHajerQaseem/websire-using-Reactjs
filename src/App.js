
import { Pagination } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Login from './LoginComponent/Login';
import Dashboard from './SubComponent/Dashboard';
import Schools from './SubComponent/Schools';
import  Teachers from './SubComponent/Teachers';
import Parents from './SubComponent/Parents';
import Students from './SubComponent/Students';


function App() {
  return (



    <div className="App">


      <Router>
        <Routes>

          <Route exact path="/" element={<Login />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />

          <Route exact path="/Schools"   element={<Schools/>} />
          
          <Route exact path="/Teachers"   element={<Teachers/>} />
           
          <Route exact path="/Parents"   element={<Parents/>} />
          
          <Route exact path="/Students"   element={<Students/>} />
          
         



        </Routes>

      </Router>

    </div>


  );
}

export default App;
