import React from 'react';
import { connect } from 'react-redux';
import "./styles/styles.scss";
import Header from './components/Header';


import * as actions from './actions/gameActions';
import TickTackToeBoard from './components/TickTackToeBoard';

export const GlobalContext = React.createContext();

const App = (props) => {

	return (
		<div className="App">
			<Header />
			<GlobalContext.Provider value={{actions: props, reduxState: props.state}}>
				<TickTackToeBoard />
			</GlobalContext.Provider>
		</div>
	);
}


const mapStateToProps = state => {
    return {
        state: state,
    };
}

export default connect(mapStateToProps, actions)(App)
