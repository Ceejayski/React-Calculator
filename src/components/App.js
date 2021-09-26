import Display from './display';
import ButtonPanel from './button-panel';
import Calculate from '../logic/calculate';

function App() {
  return (
    <div className="App">
      <Display />
      <ButtonPanel />
      <Calculate />
    </div>
  );
}

export default App;
