import { Route, Routes } from 'react-router-dom';
import './App.css';
import MyComponent from './components/MyComponents';

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<MyComponent/>}/>
  </Routes>
  </>
  );
}

export default App;