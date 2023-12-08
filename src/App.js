import './App.css';

import Summary from './Components/Summary/Summary';
import Result from './Components/Result/Result';

function App() {
  return (
    <div className="App">
      <main>
        <Result />
        <Summary />
      </main>
    </div>
  );
}

export default App;
