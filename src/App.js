import './App.css';

import Summary from './Components/Summary/Summary';
import Result from './Components/Result/Result';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Result />
        <Summary />
      </div>
    </div>
  );
}

export default App;
