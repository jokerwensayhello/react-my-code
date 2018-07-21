# react-code

## 技术栈`````````````````

### react

### redux

### react-redux

### react-router-dom

### react-thunk

### react-app-rewired

### babel-plugin-import

### axios

### antd

#### index.js

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);
registerServiceWorker();

```

#### App.js

```jsx
import React, { Component } from 'react';
import RouterIndex from './router/router';


class App extends Component {
	render() {
		return <RouterIndex />
	}
}

export default App;

```

#### router.js

```jsx
import React,{ Component } from "react";
import { Switch,Route,Redirect } from "react-router-dom";
import Index from '../views/index/index';
import Book from '../views/book/index';
import About from '../views/about/index';
import User from '../views/user/index';
import Details from '../views/details/index';


class RouterIndex extends Component {
    render(){
        return (
            <Switch>
                <Route path="/" exact render={() => (
                    <Redirect to="/index" />
                )} />
                <Route path="/index" component={Index} />
                <Route path="/book" component={Book} />
                <Route path="/about" component={About} />
                <Route path="/user" component={User} />
                <Route path="/details" component={Details} />
            </Switch>
        )
    }
}

export default RouterIndex;
```
