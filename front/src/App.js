import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp'
import LocalSignin from './components/LocalSignin';
import LandingPage from './components/LandingPage';
import Home from './components/Home'



function App() {
  return (
      <div className="App">
        <Routes>
          <Route exact path='/' element={<LandingPage/>} />
          <Route exact path= '/signup' element= {<SignUp/>}/>
          <Route exact path= '/localsignin' element= {<LocalSignin/>}/>
          <Route exact path= '/home' element={<Home/>}/>
          

        </Routes>
      </div>
    
  );
}

export default App;