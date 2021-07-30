import './App.css';
import Signal from './components/Signal';
import { aspects } from './staticData';

function App() {
  return (
    <div>
      {aspects.map((aspect, index) => {
        return <Signal key={index} aspect={aspect} />;
      })}
    </div>
  );
}

export default App;
