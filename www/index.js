import './style';
import { Component } from 'preact';

/* TODO
get general layout going
convert html template to preact
Make card components
deploy to now
*/

export default class App extends Component {
	state = {
		page: 0
	}
	render() {
		return (
			<div id="container" className="container">
				<h1>Hello, World!</h1>
			</div>
		);
	}
}

class About extends Component {

	render() {
		return (
			<div id="About" className="page">
				<Card/>
			</div>
		)
	}
}

const Card = (props) => (
		<div className="card">
			this is a thing
		</div>	
	
)