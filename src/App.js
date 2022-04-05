import { Template } from 'govuk-react-jsx';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/DefaultHeader';

function App() {
  return (
    <Router>
      <Template>
        <Routes>
          <Route exact path="/">
          </Route>
        </Routes>
      </Template>
    </Router>
    // <Header />
  );
}

export default App;
