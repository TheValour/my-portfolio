import './App.css';
import { About, Contact, Home, Project, Sidebar } from './components';

function App() {
  return (
    <div className='app_container'>
      <Sidebar/>
      <div className='display-section'>
        <Home/>
        <About/>
        <Project/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
