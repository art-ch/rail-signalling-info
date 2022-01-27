import './App.css';
import { Header, Footer } from './components/';
import { CISSignalProvider } from './CIS/CISSignalContext';
import { HomePage, CISPage } from './page-components/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="/CIS"
          element={
            <CISSignalProvider>
              <CISPage />
            </CISSignalProvider>
          }
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
