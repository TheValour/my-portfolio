import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<Home/>} /> 
          <Route path='/about' element={<About/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
