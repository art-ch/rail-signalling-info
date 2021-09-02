import './App.css';
import { CISSignalProvider } from './CIS/CISSignalContext';
import CISPage from './CIS/CISPage';

const App = () => {
  return (
    <CISSignalProvider>
      <CISPage />
    </CISSignalProvider>
  );
};

export default App;
