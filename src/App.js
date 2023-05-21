import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './routes/Home';
import Project from './routes/Project';
import About from './routes/About';
import Contact from './routes/Contact';
import './index.css'
 
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/Project' Component={Project}/>
        <Route path='/About' Component={About}/>
        <Route path='/Contact' Component={Contact}/>
      </Routes>
      
    </div>
  );
}

export default App;
