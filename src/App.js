import { Header, Footer } from './components/';
import { CISSignalProvider } from './components/CIS/CISSignalContext';
import {
  HomePage,
  NavigationPage,
  ContactPage,
  AboutPage,
  CISPage
} from './pages/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/navigate" element={<NavigationPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/about" element={<AboutPage />} />
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
