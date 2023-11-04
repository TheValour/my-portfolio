import './App.css';
import { About, Home, Sidebar } from './components';

function App() {
  return (
    <div className='app_container'>
      <Sidebar/>
      <div className='display-section'>
        <Home/>
        <About/>
      </div>
    </div>
  );
}

export default App;
