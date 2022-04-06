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

# Component Workflow

Run the following command in order to use mkrc package to create component, style, and test files.

```bash
npm run mkrc Components <componentName>
```

In the component `.jsx` import necessary `gov-uk-jsx` components and work on the component and its styling as required.

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
| `

<br>
<br>
