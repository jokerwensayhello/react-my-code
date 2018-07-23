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

