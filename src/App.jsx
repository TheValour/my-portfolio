import './App.css';
import { About, Home, Project, Sidebar } from './components';

function App() {
  return (
    <div className='app_container'>
      <Sidebar/>
      <div className='display-section'>
        <Home/>
        <About/>
        <Project/>
      </div>
    </div>
  );
}

export default App;
