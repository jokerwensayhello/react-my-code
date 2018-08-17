# react-code

## 技术栈`````````````````

```string

react,redux,react-redux,react-router-dom,react-thunk,react-app-rewired,babel-plugin-import,axios,antd
```

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
import Header from './components/header';
import Footer from './components/footer';

import './assets/style/index.css'

export default class App extends Component {
	render() {
		return (
			<div className="page-wrap">
				<Header />
				<div className="main">
					<RouterIndex></RouterIndex>
				</div>
				<Footer />
			</div>
		)
	}
}



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


export default class RouterIndex extends Component {
    render(){
        return (
            <Switch>
                <Route path="/" exact render={() => (
                    <Redirect to="/index/all" />
                )} />
                <Route path="/index/:id" component={Index} />
                <Route path="/book" component={Book} />
                <Route path="/about" component={About} />
                <Route path="/user" component={User} />
                <Route path="/details" component={Details} />
            </Switch>
        )
    }
}

```

```html

    <div class="get-quotation-broadcast flex-row-center">
        <span class="broadcast-icon"></span>
        <p class="gray">面积：82m2 张女士 预估预算：31479.20元</p>
    </div>

```