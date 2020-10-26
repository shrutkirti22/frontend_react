import logo from './logo.svg';
import './App.css';
import Showdata from './components/Showdata'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PersonReg from './components/PersonReg';
import PersonDetails from './components/PersonDetails';

function App() {
  return (
    
    <div>
            <Router>
            <Route exact path="/" component={Showdata} />
            <Route exact path="/findUser" component={PersonDetails} />

          {/* <Route path="/login" component={Login} /> */}
        
              </Router>

      {/* <Showdata /> */}
    </div>
  );
}

export default App;
