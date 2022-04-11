# Project Set Up

## Create components folder in the project root.

```bash
$ mkdir components
```

<br>

## Install `govuk-react-jsx` npm package:

```bash
$ npm install govuk-react-jsx
```

<br>

## Install React packages:

```bash
$ npm install --save react-helmet
$ npm install --save react-router
$ npm install --save react-router-dom
```

<br>

## After installing the packages we need to import the routing into App.js

```javascript
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
```

<br>

## Then we have to setup routing in the in the body of the App by wrapping the the content with `<Router>` tag.

```javascript
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/"></Route>
      </Routes>
    </Router>
  );
}
```

<br>

## Import the govuk-frontend scss files

We need to import the govuk-frontend scss module into its own file called styles.scss so it can be used through out our project. We put this into its own directory in the src folder.

Delete everything in App.css and rename file to Styles.css, create new directory called Styles inside src and put Styles.css there, delete index.css,

```css
$govuk-assets-path: "~govuk-frontend/govuk/assets/";
@import "~govuk-frontend/govuk/all";
```

<br>

## Wrap The App in a `Template` component

For consistent styling and functionality, we use the `govuk-react-jsx` page `Template` component, which will create a header and a footer for every page. It wraps the content in `App.js`.

```javascript
function App() {
  return (
    <Router>
      <Template
        title="HMRC Booking System"
        header={{ serviceName: "HMRC Booking System", serviceUrlHref: "/" }}>
        Hello World
        <Routes>
          <Route exact path="/"></Route>
        </Routes>
      </Template>
    </Router>
  );
}
```

<br>
<br>

 ## Template Component

The `Template` component wraps the main app, but it can take several different props:
<br>
<br>

| Prop                 | Value Format                          | Notes                                                                |
| -------------------- | ------------------------------------- | -------------------------------------------------------------------- |
| `beforeContent`      | `{<markup\>content<markup\>}`         | JSX markup which is rendered below the header                        |
| `containerClassName` | "container class name"                | Adds a classname with the value to the template app container        |
| `header`             | `{{headerProp1: [FooterProp1Value]}}` | JS object containiner key-pair values for the Header component props |
| `footer `            | `{{footerProp1: [FooterProp1Value]}}` | JS object containiner key-pair values for the Footer component props |
| `mainClassName`      | "custom-main-class-name"              | Add a classname to the main container                                |
| `title`              | "Page title"                          | Give `title` meta value selector                                     |

<br>

# Component Workflow


## Creating and using a Page

To create pages which will be used, we use the `mkrc` package to generate the boilerplate inside the `pages` directory.

```bash
npm run mkrc Pages <PageName>

```
This will create the directory for a component. The boilerplate component renders a `<p>` with text saying "<PageName> works".\
This page component will eventually need to import and use all the component needed for that particular page. So we now need to add it in `App.js` to check that it renders properly. Import the component at the top of the page:
```javascript
import <PageName> from "../../Pages/<PageName>";
```
Then call it in the `Route` for the appropriate path. For instance, if the imported page component is called `LandingPage` and is used as the index page, add it as such:

```javascript
import LandingPage from "../../Pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Routes>
    </Router>
  );
}
```
If the server is not already running, use `npm start` to run the project server. Check that the text appears at `http://localhost:3000/` to confirm that the page is rendering properly. You can then import other components inside the page component so that it renders in the correct route.

<br>
<br>


## Creating and using a component

Run the `mkrc` to create the component 

```bash
npm run mkrc Components <componentName>
```

This will create the directory for a component. The boilerplate component renders a `<p>` with text saying "<componentName> works".\
This component will eventually need to import and use components and tools necessary. So we now need to add it in `App.js` to check that it renders properly. Import the component at the top of the page:

<br>
<br>

## Tabs items structure
`items` is a prop for the `Tabs` components which receives an array of objects. 

```javascript
[
  {
    id: 'tab id for JS logic',
    label: 'tab label on the page',
    // Panel is an object that contains the content that will appear in this tab
    panel: {
      children: [
        // Array of elements to appear in the tab
        <h2 key="0" /* Key value represents order in which elements appear */ className="govuk-heading-l">Tab 2</h2>
      ]
    }
  }
]
```