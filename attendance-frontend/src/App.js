import { Header } from './Components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Class } from './Components/Class';

function App() {
  return (
    <div className="App">
      <h1>Class Attendance
      </h1>
      <Header />
      <Class />
    </div>
  );
}

export default App;
