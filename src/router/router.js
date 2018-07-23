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
