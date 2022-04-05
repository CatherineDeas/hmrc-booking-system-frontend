# Project Set Up

Create components folder in the project root.

```bash
$ mkdir components
```

<br>

Install `govuk-react-jsx` npm package:

```bash
$ npm install govuk-react-jsx
```

<br>

Install React packages:
```bash
$ npm install --save react-helmet
$ npm install --save react-router
$ npm install --save react-router-dom
```
# In App.js:
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


Delete everything in Apps.css and rename file to Styles.css, create new directory called Styles inside src and put Styles.css there, delete index.css, 

<br>
<br>

# Component Workflow

Run the following command in order to use mkrc package to create component, style, and test files.

```bash
npm run mkrc Components <componentName>
```

In the component `.jsx` import necessary `gov-uk-jsx` components and work on the component and its styling as required.
