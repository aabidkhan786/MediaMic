import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';

function App() {
  return (
    <>
      <Navbar title="THE GAZETTA POST" />
      <News category="general" />
    </>
  );
}
export default App;