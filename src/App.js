import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Experience from './pages/Experience';
import Blogs from './pages/Blogs';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/experience' element={<Experience />}/>
          <Route path='/blogs' element={<Blogs />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
