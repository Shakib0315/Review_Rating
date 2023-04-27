
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserSignuo from "./componants/user/UserSignuo";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<UserSignuo/>}/>
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
