import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import TeachersCard from './Components/TeachersCard/TeachersCard';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <TeachersCard></TeachersCard>
    </div>
  );
}

export default App;
