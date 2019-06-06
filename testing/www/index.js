import './style';
import { Component, render } from 'preact';
// import './assets/photon-0.1.2-dist/css/photon.css';
import { Header, Title, Footer, Button } from 'preact-photon';

/** Example app component */
const App = () => (
	<div id="app">
		<Header>
			<Title>Great App</Title>
			<Button icon="home">Home</Button>
		</Header>

		<section>
			Hello there.
		</section>

		<Footer>
			<span>Some great content here.</span>
		</Footer>
	</div>
);

render(<App />, document.body);
/* TODO
get general layout going
convert html template to preact
Make card components
deploy to now
*/
/*
export default class App extends Component {
	state = {
		page: 0
	}
	render() {
		return (
			<div id="container" className="window">
				<div className="window-content">
					<h1>Welcome to my website</h1>
					<p>My name is Hargobind Atwal I am I full stack engineering student at Lambda school.</p>
				</div>
				<About></About>
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
*/