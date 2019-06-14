let { h, render, Component } = preact;  
// import { ... } from 'preact';
/** @jsx h */


class App extends Component {
	state = {
		text: 'hello'
	};
	
	render({}, { text }) {
		return (
			<app>
				<header>
					<h1>
						Preact Kickstart
						<sub>powered by <a href="https://github.com/developit/preact" target="_blank">preact</a></sub>
					</h1>
					<input
						type="text"
						placeholder="Enter text..."
						value={text}
						onInput={this.linkState('text')}
					/>
				</header>
				<main>
					<BigLetters text={text} />
				</main>
			</app>
		);
	}
}


class BigLetters extends Component {
	render({ text }) {
		return <h1>{text.toUpperCase()}</h1>;
	}
}


// Start 'er up:
render(<App />, document.body);

