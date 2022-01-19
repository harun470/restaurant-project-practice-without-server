import './App.css';
import AppmainComponents from './Components/mainComponents';
import {BrowserRouter} from 'react-router-dom'
import { myStore } from './Components/redux/store';
import {Provider} from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
      <BrowserRouter>
          <AppmainComponents />
      </BrowserRouter>
      </Provider>
     
      

    </div>
  );
}

export default App;
