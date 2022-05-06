import './App.css';
import React, {useState , useContext} from "react";
import Calculate from './components/Calculate'
import Download from './components/Download'
import MaxElo from "./components/MaxElo";
import TableContext from "./components/TableContext";
import EloChange from "./components/EloChange";
import CurrentRating from "./components/CurrentRating";
import Top from "./components/Top";
import MaxChange from "./components/MaxChange";
import Comparison from "./components/Comparison";
import History from "./components/HIstory";
class App extends React.Component{

    setTable = (table) => {
        this.setState({table: table})
    }

    state = {
        table: <div></div>,
        setTable : this.setTable
    }

    render(){
        return (
            <TableContext.Provider value={this.state}>
                <div className="App-header">
                    <Calculate />
                    <Download />
                    <EloChange/>
                    <CurrentRating/>
                    <MaxElo />
                    <Top />
                    <MaxChange/>
                    <Comparison/>
                    <History />

                    {this.state.table}
                </div>
            </TableContext.Provider>
        )
    }
}

export default App;
