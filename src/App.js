import './App.css';
import AppmainComponents from './Components/mainComponents';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <AppmainComponents />
      </BrowserRouter>
      

    </div>
  );
}

export default App;
