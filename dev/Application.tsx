import React from 'react';
import Menu from './Menu';

export default class Application extends React.Component {
	render() {
		return (
			<>
				<header>
					<Menu />
				</header>
				<main>
					Main
				</main>
				<footer>
					Footer
				</footer>
			</>
		);
	}
}