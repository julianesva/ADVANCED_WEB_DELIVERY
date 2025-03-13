import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListAct from "./components/ListActivity";
import Ccv from "./components/creditCardValidator";
import NavList from './components/NavList';
import CountAct from './components/CountActivity';
import PromiseAct from './components/PromiseActivity'; 


function App() {
  return (
    <Router>
      <div className="App">
        <NavList/>
        <div className = "content">
          <Routes>
            <Route path="/" element={<CountAct />}/>
            <Route path="/ListActivity" element={<ListAct />}/>
            <Route path="/creditCardValidator" element={<Ccv />}/>
            <Route path="/PromiseActivity" element={<PromiseAct />}/>
            <Route path="*" element={<CountAct />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
