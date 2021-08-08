import { Header } from './Components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sidebar } from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <h1>Class Attendance
      </h1>
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
