import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp.jsx'
import LocalSignin from './components/LocalSignin';


function App() {
  return (
      <div className="App">
        <Routes>
          <Route exact path='/' element={<LocalSignin/>} />
          <Route exact path= '/signUp' element={<SignUp/>}/>
          

        </Routes>
      </div>
    
  );
}

export default App;