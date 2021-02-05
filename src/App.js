import './App.css';
import {callService} from './service/callservice';

function App() {
  return (
    <div className='App'>
      <input type='button' onClick={callService} value='click me'/>
    </div>
  );
}

export default App;
