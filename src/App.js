import React from 'react';
import "./styles/styles.scss";
import Header from './components/Header';
import WelcomeCard from './components/WelcomeCard';
import Board from './components/Board';
import PlayerCard from './components/PlayerCard'
import WinnerCard from './components/WinnerCard';

function App() {
	return (
		<div className="App">
			<Header />
			<div className="container">
				{/* <WelcomeCard /> */}
				{/* <div className="play-board flex flex-middle flex-even">
					<PlayerCard />
					<Board />
					<PlayerCard />
				</div> */}
				<WinnerCard />
			</div>
		</div>
	);
}

export default App;
