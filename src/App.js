import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./LoginComponent/Login";
import Dashboard from "./SubComponent/Dashboard";
import Schools from "./SubComponent/Schools";
import Teachers from "./SubComponent/Teachers";
import Parents from "./SubComponent/Parents";
import Students from "./SubComponent/Students";
import Users from "./SubComponent/Users";
import AddUser from "./SubComponent/AddUser";
import Subjects from "./SubComponent/Subjects";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />

          <Route exact path="/Schools" element={<Schools />} />

          <Route exact path="/Teachers" element={<Teachers />} />

          <Route exact path="/Parents" element={<Parents />} />

          <Route exact path="/Students" element={<Students />} />

          <Route exact path="/Users" element={<Users />} />

          <Route exact path="/AddUser" element={<AddUser />} />

          <Route path="/Subjects"     element={<Subjects/>}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
