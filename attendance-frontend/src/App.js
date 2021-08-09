
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sidebar } from './Components/Sidebar';
import { Home } from './Components/Home'
import { Header } from './Components/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Class Attendance
      </h1>
      <BrowserRouter>
        <Header />
        <div style={{ display: "flex" }}>
          <div style={{ width: "20%" }}>
            <Sidebar />
          </div>


          <div style={{ width: "100%" }}>
            <Home />
          </div>
        </div>

      </BrowserRouter>


    </div >
  );
}

export default App;
